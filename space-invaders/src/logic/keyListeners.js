export const addKeyListener = keydownListener => {
  window.addEventListener("keydown", keydownListener);
};

export const removeKeyListener = keydownListener => {
  window.removeEventListener("keydown", keydownListener);
};
