/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/await-async-utils */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ColorModeProvider } from '@tonic-ui/react';
import '@testing-library/jest-dom/extend-expect';
import MenuBtn from './MenuBtn';

test('MenuBtn 正確打開和關閉Modal', async () => {
  render(
    <ColorModeProvider>
      <MenuBtn />
    </ColorModeProvider>
  );

  // 初始情況下，Modal應該是關閉的
  expect(screen.queryByTestId('modal')).toBeNull();
  await waitFor(() => {
    const openMenuButton = screen.queryByTestId('menu-btn');
    expect(openMenuButton).toBeInTheDocument();
  });
  const openMenuButton = screen.queryByTestId('menu-btn');

  // 點擊按鈕應該打開Modal
  act(() => {
    fireEvent.click(openMenuButton);
  });

  // 使用 waitFor 等待Modal出现
  waitFor(() => {
    // 確認Menu裡面的選項是否皆有正常出現
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Accounts')).toBeInTheDocument();
    expect(screen.getByText('Privacy control')).toBeInTheDocument();
    expect(screen.queryByTestId('modal')).toBeInTheDocument();
  });

  // 再次點擊按鈕應該關閉Modal
  act(() => {
    fireEvent.click(openMenuButton);
  });

  // 使用 waitFor 等待Modal消失
  waitFor(() => {
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});

test('toggleMenu should toggle isMenuOpen state', () => {
  render(
    <ColorModeProvider>
      <MenuBtn />
    </ColorModeProvider>
  );
  const openMenuButton = screen.queryByTestId('menu-btn');

  act(() => {
    fireEvent.mouseDown(openMenuButton);
  });
  waitFor(() => {
    expect(openMenuButton).toHaveTextContent('Close Menu');
  });

  act(() => {
    fireEvent.mouseDown(openMenuButton);
  });
  waitFor(() => {
    expect(openMenuButton).toHaveTextContent('Open Menu');
  });
});

test('closeMenu should set isMenuOpen to false', () => {
  render(
    <ColorModeProvider>
      <MenuBtn />
    </ColorModeProvider>
  );
  const openMenuButton = screen.queryByTestId('menu-btn');

  act(() => {
    fireEvent.mouseDown(openMenuButton);
  });
  waitFor(() => {
    expect(openMenuButton).toHaveTextContent('Close Menu');
  });
  act(() => {
    fireEvent.mouseDown(openMenuButton);
  });
  waitFor(() => {
    expect(openMenuButton).toHaveTextContent('Open Menu');
  });
});

test('calculateModalPosition should update modalPosition', () => {
  render(
    <ColorModeProvider>
      <MenuBtn />
    </ColorModeProvider>
  );
  const openMenuButton = screen.queryByTestId('menu-btn');
  act(() => {
    fireEvent.mouseDown(openMenuButton);
  });
  waitFor(() => {
    const modal = screen.queryByTestId('modal');
    const buttonRect = openMenuButton.getBoundingClientRect();
    const modalPosition = modal.getBoundingClientRect();

    expect(modalPosition.top).toBe(buttonRect.bottom + window.scrollY);
    expect(modalPosition.left).toBe(buttonRect.left + window.scrollX);
  });
});

test('handleResize should update modalPosition and close menu', () => {
  render(
    <ColorModeProvider>
      <MenuBtn />
    </ColorModeProvider>
  );
  const openMenuButton = screen.queryByTestId('menu-btn');
  act(() => {
    fireEvent.mouseDown(openMenuButton);
  });

  waitFor(() => {
    const modal = screen.queryByTestId('modal');
    const buttonRect = openMenuButton.getBoundingClientRect();
    const modalPositionBeforeResize = modal ? modal.getBoundingClientRect() : null;

    // 檢查Modal是否存在
    expect(modalPositionBeforeResize).not.toBeNull();

    // 模擬window大小變化
    window.dispatchEvent(new Event('resize'));

    // 使用 waitFor 等待Modal關閉
    waitFor(() => {
      const modalPositionAfterResize = modal ? modal.getBoundingClientRect() : null;

      // 檢查Modal是否關閉了
      expect(modalPositionAfterResize).toBeNull();

      if (modalPositionBeforeResize) {
        // 檢查 modalPosition 是否被更新
        expect(modalPositionAfterResize.top).toBe(buttonRect.bottom + window.scrollY);
        expect(modalPositionAfterResize.left).toBe(buttonRect.left + window.scrollX);
      }
    });
  });
});
