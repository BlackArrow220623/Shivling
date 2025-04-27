import { View, Text, SafeAreaView, Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ backgroundColor: '#6363e0', flex: 1 }} >
            <View style={{ flex: 1, paddingTop: '15%', alignItems: 'center', alignItems: "center" }} >
                <Text style={{ color: "#fff", fontWeight: 700, textAlign: 'center', fontSize: 25 }}>
                    Let's Get Started!
                </Text>
                <View style={{ paddingTop: '50%' }}>
                    <Image source={require("../../pages/assets/taskPage.webp")} style={{ width: 300, height: 300 }} />
                </View>
                <View style={{ width: '100%', borderRadius: 15, padding: '5%', paddingTop: '20%' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={{ borderRadius: 10, backgroundColor: '#fff000', padding: 12 }}>
                        <Text style={{ textAlign: 'center', fontSize: 19, fontWeight: '700' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%',height:'100%', display: 'flex',textAlign:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{textAlign:'center',display:'flex'}} >
                        <Text style={{textAlign:'center',color:'#fff',fontSize:15}}>Already Have an Account? <Text style={{color:'#fff000',fontWeight: '900'}}>Log In</Text></Text> 
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen;