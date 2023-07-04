export interface CalloutConfig {
  [key: string]: {
    icon: string;
    title: string;
  };
}

export const CUSTOM_CALLOUT_CONFIG: CalloutConfig = {
  info: {
    icon: 'fa-solid fa-info',
    title: 'Info',
  },
  note: {
    icon: 'fa-solid fa-sticky-note',
    title: 'Note',
  },
  success: {
    icon: 'fa-solid fa-check',
    title: 'Success',
  },
  question: {
    icon: 'fa-solid fa-question',
    title: 'Question',
  },
  warning: {
    icon: 'fa-solid fa-exclamation-triangle',
    title: 'Warning',
  },
  error: {
    icon: 'fa-solid fa-xmark',
    title: 'Error',
  },
  example: {
    icon: 'fa-solid fa-list-ul',
    title: 'Example',
  },
  quote: {
    icon: 'fa-solid fa-quote-left',
    title: 'Quote',
  },
};
