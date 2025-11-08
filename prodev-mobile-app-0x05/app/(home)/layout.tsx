import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
    return(
        <Tabs screenOptions={ {
            tabBarActiveTintColor: "#34967C",
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={ {
                    title: "Home",
                    tabBarIcon: ({ color }) => 
                        <AntDesign name="home" size={24} color={color} />
                    
                }}
            />
            <Tabs.Screen
                name="search"
                options={ {
                    title: "Search",
                    tabBarIcon: ({ color }) => 
                        <EvilIcons name="search" size={30} color={color} />
                    
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={ {
                    title: "saves",
                    headerShown: true,
                    tabBarIcon: ({ color }) => <EvilIcons name="heart" size={30} color={color} />
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={ {
                    title: "Inbox",
                    headerShown: true,
                    tabBarIcon: ({ color }) => 
                        <Ionicons name="person-circle-outline" size={30} color={color} />
                }}
            />
                <Tabs.Screen
                name="profile" options={ {
                    title: "Profile",
                    headerShown: true,
                    tabBarIcon: ({ color }) => 
                        <Feather name="user" size={30} color="black" />
                }}
            />  

        </Tabs>
    )
}
export default HomeRootLayout;