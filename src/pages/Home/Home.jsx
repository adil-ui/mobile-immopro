import { Text, View, Image, Button, ScrollView } from "react-native";
import React from 'react'
import homeStyle from "./style";

const Home = () => {
    return (
        <ScrollView style={homeStyle.homeContainer}>

            <View style={homeStyle.heroContainer}>
                <View style={homeStyle.header}>
                    <Image source={require('../../../assets/images/logo.png')} style={homeStyle.logo} />
                    <View style={homeStyle.btnAdd}><Text style={homeStyle.btnText}>+ Publier annonce</Text></View>

                </View>
                <Image source={require('../../../assets/images/hero-01.jpg')} style={homeStyle.heroImage} />
                <View style={homeStyle.heroBack}></View>
                <View style={homeStyle.heroTextContainer}>
                    <Text style={homeStyle.heroText1}>Trouvez les nouveaux biens et les biens vedettes situés dans votre pays.</Text>
                </View>
            </View>

            <View style={homeStyle.latestProtperties}>
                <Text style={homeStyle.title}>Les dernières Annonces</Text>
                <View style={homeStyle.card}>
                    <View style={homeStyle.ImageContainer}>
                        <Image source={require('../../../assets/images/img_1.png')} style={homeStyle.cardImage} />
                    </View>
                    <View style={homeStyle.cardText}>
                        <View style={homeStyle.cardTextContainer}>
                            <Text style={homeStyle.cardTitle}>VILLA LUXE</Text>
                            <Text style={homeStyle.cardPrice}>500 000 000 Dh</Text>
                        </View>

                        <View style={homeStyle.btnAdd}><Text style={homeStyle.btnText}>Details</Text></View>

                    </View>
                </View>
                <View style={homeStyle.card}>
                    <View style={homeStyle.ImageContainer}>
                        <Image source={require('../../../assets/images/property_2_1.jpg')} style={homeStyle.cardImage} />
                    </View>
                    <View style={homeStyle.cardText}>
                        <View style={homeStyle.cardTextContainer}>
                            <Text style={homeStyle.cardTitle}>HOME LUXE</Text>
                            <Text style={homeStyle.cardPrice}>300 000 000 Dh</Text>
                        </View>
                        <View style={homeStyle.btnAdd}><Text style={homeStyle.btnText}>Details</Text></View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

