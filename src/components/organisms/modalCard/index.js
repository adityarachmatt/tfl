import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../styling";
import ImageView from "../../molecules/imageView";
import TagList from "../../molecules/tagList";

const DIMENSIONS = {
  WIDTH: Dimensions.get("window").width * 0.95,
};

const ModalCard = ({
  title,
  image,
  setImage,
  tagData,
  setTagData,
  otherTagCategory,
  menuVisible,
  handleOpenMenu,
  onPressItem,
  isDeleting,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ImageView image={image} setImage={setImage} />
      <TagList
        data={tagData}
        setData={setTagData}
        otherTagCategory={otherTagCategory}
        menuVisible={menuVisible}
        handleOpenMenu={handleOpenMenu}
        onPressItem={onPressItem}
        isDeleting={isDeleting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.WIDTH,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: "Inter-Bold",
    padding: 12,
  },
});

export default ModalCard;
