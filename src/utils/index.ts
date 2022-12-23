import striptags from 'striptags';

export const goToPage = (url: string) => {
  window.location.href = url;
};

export const stripAllTags = (text: string | null): string => {
  if (text) {
    return striptags(text)
      .replace(/&nbsp;/g, ' ')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<');
  } else {
    return '';
  }
};
