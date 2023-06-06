import { Text, View, Image, StyleSheet } from "react-native";
import { useTypewriter } from 'typewriter-effect'
export default function Home() {
    const [text] = useTypewriter({
        words: ['Appartement', 'Maison', 'Villa', 'Commerciale', 'Bureau'],
        loop: 0,
        typeSpeed: 120,
        deleteSpeed: 120,
        delaySpeed: 1500,
    })
    return <View style={styles.heroContainer}>
        <Image source={require('../../assets/images/ab-top2.png')} style={styles.heroImage} />

        <View style={styles.heroBack}></View>

        <View style={styles.heroTextContainer}>
            <Text style={styles.heroText1}> Recherchez votre prochaine <Text style={styles.primaryColor}>{text}</Text>  </Text>
            <Text style={styles.heroText2}>Trouvez les nouveaux biens et les biens vedettes situés dans votre pays.</Text>
        </View>
        <Text>
        </Text>
    </View>
}

const styles = StyleSheet.create({
    primaryColor: {
        color: '#f7b40c',
    },
    heroContainer: {
        position: 'relative',
    },
    heroBack: {
        backgroundColor: 'black',
        opacity: 0.3,
        width: '100%',
        height: '80%',
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    heroTextContainer: {
        width: '100%',
        height: '80%',
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    heroImage: {
        width: '100%',
        height: '80%',
    },
    heroText1: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    heroText2: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',

    }

})