import { useTheme } from "@shopify/restyle";
import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components";
import { makeStyles, Theme } from "@/theme";
import { isAndroid } from "@/utils/constants/device";

export default function TabLayout() {
  const styles = useStyles();
  const colors = useTheme<Theme>().colors;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: false,
        tabBarItemStyle: { top: isAndroid ? 0 : 12 },
        tabBarStyle: [styles.tabBarStyle, { backgroundColor: colors.bg100 }],
      }}
    >
      <Tabs.Screen
        name="index/index"
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon name="code" icon="House" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="code" icon="ChartNoAxesColumn" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
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
    height: 70,
    borderTopWidth: 2,
    backgroundColor: theme.colors.bg100,
    borderTopColor: theme.colors.primary300,
  },
}));
