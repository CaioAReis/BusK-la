import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components";
import { makeStyles } from "@/theme";

export default function TabLayout() {
  const styles = useStyles();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: false,
        tabBarItemStyle: { top: 12 },
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="code" icon="House" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="code" icon="ChartNoAxesColumn" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="code" icon="UserRound" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

const useStyles = makeStyles((theme) => ({
  tabBarStyle: {
    borderTopWidth: 2,
    backgroundColor: theme.colors.bg100,
    borderTopColor: theme.colors.primary300,
  },
}));
