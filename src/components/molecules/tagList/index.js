import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Tag from "../../atoms/Tag";
import OtherTag from "../../atoms/OtherTag";
import { spacing } from "../../../styling";

// SHAPE OF "data" PROP = { key: {content, category, selected} }

const TagList = ({
  data,
  setData,
  otherTagCategory,
  menuVisible,
  handleOpenMenu,
  onPressItem,
  isDeleting,
}) => {
  const [forceUpdateValue, setForceUpdateValue] = useState(0); // Arbitrary value to force updates
  const forceUpdate = () => {
    setForceUpdateValue((prevState) => prevState + 1);
  };
  const selectTag = (key) => {
    console.log(`selecting tag: ${key}`);
    const { selected } = data[key];
    setData((data) => ({
      ...data,
      [key]: { ...data[key], selected: !selected },
    }));
  };
  const deleteTag = (key) => {
    console.log(`deleting tag: ${key}`);
    setData((data) => {
      const newData = data;
      delete newData[key];
      console.log(`deleteTag>newData: ${JSON.stringify(newData)}`);
      return newData;
    });
    forceUpdate();
  };
  const onPressTag = (key, isDeleting) => {
    if (isDeleting) {
      deleteTag(key);
    } else {
      selectTag(key);
    }
  };
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
              onPress={() => onPressTag(key, isDeleting)}
              isDeleting={isDeleting}
            />
          );
        })}
      <OtherTag
        contentContainerStyle={styles.tagMargins}
        content="Lainnya"
        setData={setData}
        otherTagCategory={otherTagCategory}
        menuVisible={menuVisible}
        handleOpenMenu={handleOpenMenu}
        onPressItem={onPressItem}
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
