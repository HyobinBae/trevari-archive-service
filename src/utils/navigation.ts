import { setNavigationLocation } from '../services/navigation/navigation.store';

export const getNavigationInfoInLocalStorage = () => {
  return window.localStorage.getItem('navigationInfoInLocalStorage');
};

export const setNavigationInfoInLocalStorage = (newNavigationInfo: string) => {
  window.localStorage.setItem('navigationInfoInLocalStorage', newNavigationInfo);
  setNavigationLocation(newNavigationInfo);
};
