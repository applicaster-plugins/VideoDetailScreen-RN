import { Platform, NetInfo } from 'react-native';

export default async () => {
  if (Platform.OS === 'ios') {
    return new Promise(resolve => {
      const connectionHandler = connectionInfo => {
        NetInfo.removeEventListener('connectionChange', connectionHandler);

        resolve(connectionInfo);
      };

      NetInfo.addEventListener('connectionChange', connectionHandler);
    });
  }

  return NetInfo.getConnectionInfo();
};
