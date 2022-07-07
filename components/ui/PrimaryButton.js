import {View,Text, Pressable, StyleSheet} from "react-native";
function PrimaryButton({children, onPress}) {
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable  style={styles.buttonInnerContainer}
                        onPress={onPress}
                        android_ripple={{color: "#640233"}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
        );

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        borderWidth: 2,
        backgroundColor: "rgba(155,30,103,0.97)",
        elevation: 2,
        margin: 4,

    },

    buttonInnerContainer: {
        backgroundColor: "rgba(155,30,103,0.97)",
        paddingVertical: 8,
        elevation: 2,
        margin: 4,
        borderRadius: 28,
    },

    buttonText: {
        color: "white",
        textAlign: "center"
    }

});
