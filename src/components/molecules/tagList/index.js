import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Tag from "../../atoms/Tag";
import OtherTag from "../../atoms/OtherTag";
import { spacing } from "../../../styling";

// SHAPE OF "data" PROP = { key: {content, category, selected}}

const TagList = ({ data, onPressTag, onPressLainnya }) => {
  return (
    <View style={styles.container}>
      {data &&
        Object.entries(data).map((entry, index) => {
          const [key, value] = entry;
          const { content, category, selected } = value;
          return (
            <Tag
              key={key}
              content={content}
              category={category}
              selected={selected}
              contentContainerStyle={styles.tagMargins}
              onPress={() => onPressTag(key)}
            />
          );
        })}
      <OtherTag
        contentContainerStyle={styles.tagMargins}
        content="Lainnya"
        onPress={onPressLainnya}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: spacing.componentWidth,
    marginTop: 20,
    marginBottom: 12,
  },
  tagMargins: {
    marginRight: 8,
    marginBottom: 8,
  },
});

export default TagList;
