  import { Stack } from "expo-router";
  import "global.css"

  export default function RootLayout() {
    return (
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="/" />
        <Stack.Screen name="join" />
        <Stack.Screen name="signin" />
      </Stack>
    );
  }





//   import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         // headerSho
//         // wn: false, // hides headers globally
//       }}
//     />
//   );
// }
