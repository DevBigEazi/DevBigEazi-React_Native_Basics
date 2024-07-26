//Image, ImageBackground, ScrollView, Text, View

import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Button,
    Image,
    ImageBackground,
    Modal,
    Pressable,
    ScrollView,
    StatusBar,
    Text,
    View,
} from "react-native";
import Greeting from "./components/Greeting";

const testImg = require("./assets/adaptive-icon.png");

// export default function App() {
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 backgroundColor: "plum",
//                 padding: 30,
//             }}>
//             {/* <Text style={{ color: "#fff", fontSize: 20, margin: 40 }}>
//                 <Text style={{ color: "yellow" }}>Hello</Text> World
//             </Text> */}

//             {/* <View>
//                 <Image source={testImg} style={{ height: 200, width: 200 }} />
//                 <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ height: 300, width: 300 }} />
//             </View> */}

//             {/* <ImageBackground source={testImg} style={{ flex: 1 }}>
//                 <Text>Hello How are you</Text>
//             </ImageBackground> */}
//             <ScrollView>
// <Image source={testImg} style={{ height: 200, width: 200 }} />

// <Text>
//     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
//     cum enim facilis aliquid error magnam non provident, delectus dolores
//     maiores quisquam dolorem labore ut quo consectetur iure eum qui ipsam,
//     ipsa recusandae deserunt quae corporis temporibus? Corrupti quaerat
//     provident molestias quae nemo voluptas veniam dolor? Mollitia,
//     commodi. Voluptatum cupiditate culpa aspernatur iste quas quam
//     adipisci inventore, numquam nihil eaque, magnam iure blanditiis natus
//     nobis corrupti repellendus minus illo totam unde vel dignissimos!
//     Iusto ad qui cum culpa fugit amet laudantium illum! Cum quia nam aut
//     minus necessitatibus iste maxime animi facilis iure. Recusandae atque
//     unde veritatis quos laboriosam, vel iste deleniti asperiores optio
//     illum, distinctio incidunt ullam libero quasi ipsum earum molestias
//     natus possimus eum explicabo. Facilis alias nulla eum nesciunt vitae
//     corporis tempore assumenda neque deleniti, inventore rem quasi
//     veritatis! Accusamus voluptate, error optio accusantium omnis pariatur
//     natus, quos soluta repellat at iste consequatur? Laborum sequi,
//     debitis id accusantium culpa harum aperiam harum aperiam assumenda
//     odio aut expedita fugiat neque rem temporibus possimus, nobis
//     inventore! Porro pariatur ullam iusto dolorem nostrum animi quae
//     veniam dicta numquam obcaecati et tempora, temporibus sequi non quasi.
//     Natus, recusandae. Aspernatur aut odio nesciunt sequi laudantium qui
//     molestias recusandae. Soluta delectus doloremque ratione perspiciatis
//     dicta excepturiassumenda odio aut expedita fugiat neque rem temporibus
//     possimus, nobis inventore! Porro pariatur ullam iusto dolorem nostrum
//     animi quae veniam dicta numquam obcaecati et tempora, temporibus sequi
//     non quasi. Natus, recusandae. Aspernatur aut odio nesciunt sequi
//     laudantium qui molestias recusandae. Soluta delectus doloremque
//     ratione perspiciatis dicta excepturi.
// </Text>

// <Image source={testImg} style={{ height: 200, width: 200 }} />
//             </ScrollView>
//         </View>
//     );
// }

// Pressable
// export default function App() {
//     return (
//         <View style={{ flex: 1, padding: 40, backgroundColor: "plum" }}>
//             <Button title="Press" color={"midnightblue"} onPress={() => console.log("Button pressed")} />
//             <Pressable onPress={() => console.log("Image is pressed")}>
//                 <Image source={testImg} style={{ height: 200, width: 200 }} />
//             </Pressable>

//             <Pressable onPress={() => console.log("Text is pressed")}>
//                 <Text>
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
//                     cum enim facilis aliquid error magnam non provident, delectus dolores
//                     maiores quisquam dolorem labore ut quo consectetur iure eum qui ipsam,
//                     ipsa recusandae deserunt quae corporis temporibus? Corrupti quaerat
//                     provident molestias quae nemo voluptas veniam dolor? Mollitia,
//                     commodi. Voluptatum cupiditate culpa aspernatur iste quas quam
//                     adipisci inventore, numquam nihil eaque, magnam iure blanditiis natus
//                     nobis corrupti repellendus minus illo totam unde vel dignissimos!
//                     Iusto ad qui cum culpa fugit amet laudantium illum! Cum quia nam aut
//                     minus necessitatibus iste maxime animi facilis iure. Recusandae atque
//                     unde veritatis quos laboriosam, vel iste deleniti asperiores optio
//                     illum, distinctio incidunt ullam libero quasi ipsum earum molestias
//                     natus possimus eum explicabo. Facilis alias nulla eum nesciunt vitae
//                     corporis tempore assumenda neque deleniti, inventore rem quasi
//                     veritatis! Accusamus voluptate, error optio accusantium omnis pariatur
//                     natus, quos soluta repellat at iste consequatur? Laborum sequi,
//                 </Text>
//             </Pressable>

//         </View>
//     )
// }

// Modal
// animationType is set to none by default. It is also important to handle onRequestClose
// presentationStyle only affect iOS
// export default function App() {

//     const [isModalVisible, setIsModalVisible] = useState(false)
//     return (
//         <View style={{ flex: 1, padding: 40, backgroundColor: "plum" }}>
//             <Button title="Press" color={"midnightblue"} onPress={() => setIsModalVisible(true)} />

//             <Modal visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)} style={{ flex: 1, backgroundColor: "lightblue" }} animationType="fade">
//                 <Text>Modal contents</Text>
//                 <Button title="close" color="red" onPress={() => setIsModalVisible(false)} />
//             </Modal>
//         </View>
//     )
// }

// Statusbar only applicable to android
// barStyle is the color

// export default function App() {

//     return (
//         <View style={{ flex: 1, padding: 40, backgroundColor: "plum" }}>
//             <StatusBar backgroundColor="lightblue" barStyle="dark-content" hidden/>
//         </View>
//     )
// }

// //ActivityIndicator
// export default function App() {
//     const [animating, setAnimating] = useState(false)
//     return (
//         <View style={{ flex: 1, padding: 40, backgroundColor: "plum" }}>
//             <ActivityIndicator color="yellow" />
//             <ActivityIndicator color="yellow" size="large" />
//             <ActivityIndicator color="blue" size="large" animating={animating} />

//             <Button title="Animate" onPress={() => setAnimating(true)} />
//         </View>
//     )
// }

//Alert
export default function App() {
    return (
        <View style={{ flex: 1, padding: 40, backgroundColor: "plum" }}>
            <Button title="ALert 1" onPress={() => Alert.alert("Invalid data")} />
            <Button
                title="ALert 2"
                onPress={() => Alert.alert("Invalid data", "DOB incorrect!")}
            />
            <Button
                title="ALert 3"
                onPress={() =>
                    Alert.alert("Invalid data", "DOB incorrect!", [
                        {
                            text: "cancel",
                            onPress: () => console.log("Cancel pressed"),
                        },
                        {
                            text: "ok",
                            onPress: () => console.log("Ok pressed"),
                        },
                    ])
                }
            />
            <Greeting name={"Habibi"} />
            <Greeting name={"Habiba"} />
        </View>
    );
}
