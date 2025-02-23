import React from "react";

const icons = {
  edit: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-pencil"
      viewBox="0 0 16 16"
    >
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9-9zM11.207 2L2 11.207V13h1.793L14 4.793 11.207 2zM3 12v-1.5L11.5 2H13v1.5L4.5 12H3z" />
    </svg>
  ),
  assign: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-person-plus"
      viewBox="0 0 16 16"
    >
      <path d="M6 8c-2.21 0-4-1.79-4-4S3.79 0 6 0s4 1.79 4 4-1.79 4-4 4zm0 1c-2.5 0-6 1.01-6 3v1h12v-1c0-1.99-3.5-3-6-3zm9-1h-1.5V5H13v2H11v1h2v2h1V7h1.5V6z" />
    </svg>
  ),
  delete: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-6zm3 5.5V6h-1v5h1zM4.5 1.5A1.5 1.5 0 0 1 6 0h4a1.5 1.5 0 0 1 1.5 1.5H14a.5.5 0 0 1 0 1h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V2.5H2a.5.5 0 0 1 0-1h2.5z" />
    </svg>
  ),
  view: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-eye"
      viewBox="0 0 16 16"
    >
      <path d="M16 8s-3.5-5.5-8-5.5S0 8 0 8s3.5 5.5 8 5.5S16 8 16 8zm-8 4.5c-1.43 0-2.75-.5-3.8-1.35a5.535 5.535 0 0 1 7.6 0A6.68 6.68 0 0 1 8 12.5zm0-8C5.1 4.5 3 6.57 3 8c0 1.43 2.1 3.5 5 3.5S13 9.43 13 8c0-1.43-2.1-3.5-5-3.5z" />
    </svg>
  ),
  checked: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-check-lg"
      viewBox="0 0 16 16"
    >
      <path d="M13.485 1.929a.5.5 0 0 1 .57.093l.093.083a.5.5 0 0 1 .093.57l-.083.094-7 8a.5.5 0 0 1-.63.063l-.09-.08-4-4a.5.5 0 0 1 .63-.77l.09.08 3.469 3.47 6.469-7.41z" />
    </svg>
  ),
  cancel: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-x-lg"
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708z" />
    </svg>
  ),
  threeDots: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-three-dots"
      viewBox="0 0 16 16"
    >
      <path d="M3 9.5A1.5 1.5 0 1 1 3 6a1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  ),
  addButton: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 98 98"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.0001 0.183594C62.4801 0.183594 74.6841 5.64839 83.5201 14.4806C92.356 23.3126 97.8171 35.5196 97.8171 49.0006C97.8171 62.4816 92.3523 74.6846 83.5201 83.5206C74.6881 92.3565 62.4811 97.8176 49.0001 97.8176C35.5191 97.8176 23.3161 92.3528 14.4801 83.5206C5.64421 74.6886 0.183105 62.4816 0.183105 49.0006C0.183105 35.5196 5.64791 23.3166 14.4801 14.4806C23.3121 5.64469 35.5191 0.183594 49.0001 0.183594ZM46.711 26.4296C46.711 25.1679 47.7344 24.1405 49.0001 24.1405C50.2618 24.1405 51.2892 25.1678 51.2892 26.4296V46.7106H71.5702C72.8319 46.7106 73.8593 47.734 73.8593 48.9997C73.8593 50.2614 72.832 51.2888 71.5702 51.2888H51.2892V71.5698C51.2892 72.8315 50.2658 73.8589 49.0001 73.8589C47.7384 73.8589 46.711 72.8316 46.711 71.5698V51.2888H26.43C25.1683 51.2888 24.1409 50.2654 24.1409 48.9997C24.1409 47.738 25.1682 46.7106 26.43 46.7106H46.711V26.4296Z"
      />
    </svg>
  ),
  add: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" />
    </svg>
  ),
  copy: (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 1.75C2.66848 1.75 2.35054 1.8817 2.11612 2.11612C1.8817 2.35054 1.75 2.66848 1.75 3V12C1.75 12.3315 1.8817 12.6495 2.11612 12.8839C2.35054 13.1183 2.66848 13.25 3 13.25H4C4.41421 13.25 4.75 13.5858 4.75 14C4.75 14.4142 4.41421 14.75 4 14.75H3C2.27065 14.75 1.57118 14.4603 1.05546 13.9445C0.539731 13.4288 0.25 12.7293 0.25 12V3C0.25 2.27065 0.539731 1.57118 1.05546 1.05546C1.57118 0.539731 2.27065 0.25 3 0.25H12C12.7293 0.25 13.4288 0.539731 13.9445 1.05546C14.4603 1.57118 14.75 2.27065 14.75 3V4C14.75 4.41421 14.4142 4.75 14 4.75C13.5858 4.75 13.25 4.41421 13.25 4V3C13.25 2.66848 13.1183 2.35054 12.8839 2.11612C12.6495 1.8817 12.3315 1.75 12 1.75H3ZM10 8.75C9.30964 8.75 8.75 9.30964 8.75 10V19C8.75 19.6904 9.30964 20.25 10 20.25H19C19.6904 20.25 20.25 19.6904 20.25 19V10C20.25 9.30964 19.6904 8.75 19 8.75H10ZM7.25 10C7.25 8.48122 8.48122 7.25 10 7.25H19C20.5188 7.25 21.75 8.48122 21.75 10V19C21.75 20.5188 20.5188 21.75 19 21.75H10C8.48122 21.75 7.25 20.5188 7.25 19V10Z"
      />
    </svg>
  ),
};

const Icon = ({ name, size = 16, color = "currentColor" }) => {
  const selectedIcon = icons[name];
  if (!selectedIcon) {
    console.warn(`Icon '${name}' does not exist.`);
    return null;
  }

  return React.cloneElement(selectedIcon, {
    width: size,
    height: size,
    fill: color,
  });
};

export default Icon;
