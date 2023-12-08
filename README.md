# Run
```cmd
npx expo start
```

# Some issues 
### Native Base
https://stackoverflow.com/questions/76579391/in-react-18-ssrprovider-is-not-necessary-and-is-a-noop-you-can-remove-it-from-y
1) Navigate to node_modules/native-base/src/core/NativeBaseProvider.tsx
2) Delete that wraps {children}. Take care not to delete {children}.
3) Remove SSRProvider import. That is, delete this line import { SSRProvider } from '@react-native-aria/utils';
4) Run npx patch-package native-base. Select yes in the prompt.