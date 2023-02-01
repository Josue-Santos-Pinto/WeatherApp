
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/routes/MainStack';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query/build/lib/QueryClientProvider';

const client = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={client}>
          <MainStack />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

