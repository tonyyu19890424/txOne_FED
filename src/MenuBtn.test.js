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

test('MenuBtn 正確打開和關閉Modal', () => {
  render(
    <ColorModeProvider>
      <MenuBtn />
    </ColorModeProvider>
  );
  
  // 初始情況下，Modal應該是關閉的
  expect(screen.queryByTestId('modal')).toBeNull();
  const openMenuButton = screen.queryByTestId('menu-btn');

  // 點擊按鈕應該打開Modal
  act(() => {
    fireEvent.mouseUp(openMenuButton);
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
    fireEvent.mouseUp(openMenuButton);
  });
  
  // 使用 waitFor 等待Modal消失
  waitFor(() => {
    expect(screen.queryByTestId('modal')).toBeNull();
  });
});
