import { store } from 'react-notifications-component';

export function storeNotif(subject, message, type) {
  store.addNotification({
      title: subject,
      message: message? message:" ",
      type: type.toString(),
      insert: 'top',
      container: 'bottom-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
          duration: 10000,
          onScreen: true,
          showIcon: true,
          click: false,
          touch: false
      },
  });
}