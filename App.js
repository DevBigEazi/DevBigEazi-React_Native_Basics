import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

const testImg = require("./assets/adaptive-icon.png")

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "plum",
                padding: 30
            }}>
            {/* <Text style={{ color: "#fff", fontSize: 20, margin: 40 }}>
                <Text style={{ color: "yellow" }}>Hello</Text> World
            </Text> */}

            {/* <View>
                <Image source={testImg} style={{ height: 200, width: 200 }} />
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={{ height: 300, width: 300 }} />
            </View> */}

            {/* <ImageBackground source={testImg} style={{ flex: 1 }}>
                <Text>Hello How are you</Text>
            </ImageBackground> */}
            <ScrollView>
                <Image source={testImg} style={{ height: 200, width: 200 }} />

                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore cum enim facilis aliquid error magnam non provident, delectus dolores maiores quisquam dolorem labore ut quo consectetur iure eum qui ipsam, ipsa recusandae deserunt quae corporis temporibus? Corrupti quaerat provident molestias quae nemo voluptas veniam dolor? Mollitia, commodi. Voluptatum cupiditate culpa aspernatur iste quas quam adipisci inventore, numquam nihil eaque, magnam iure blanditiis natus nobis corrupti repellendus minus illo totam unde vel dignissimos! Iusto ad qui cum culpa fugit amet laudantium illum! Cum quia nam aut minus necessitatibus iste maxime animi facilis iure. Recusandae atque unde veritatis quos laboriosam, vel iste deleniti asperiores optio illum, distinctio incidunt ullam libero quasi ipsum earum molestias natus possimus eum explicabo. Facilis alias nulla eum nesciunt vitae corporis tempore assumenda neque deleniti, inventore rem quasi veritatis! Accusamus voluptate, error optio accusantium omnis pariatur natus, quos soluta repellat at iste consequatur? Laborum sequi, debitis id accusantium culpa harum aperiam harum aperiam assumenda odio aut expedita fugiat neque rem temporibus possimus, nobis inventore! Porro pariatur ullam iusto dolorem nostrum animi quae veniam dicta numquam obcaecati et tempora, temporibus sequi non quasi. Natus, recusandae. Aspernatur aut odio nesciunt sequi laudantium qui molestias recusandae. Soluta delectus doloremque ratione perspiciatis dicta excepturiassumenda odio aut expedita fugiat neque rem temporibus possimus, nobis inventore! Porro pariatur ullam iusto dolorem nostrum animi quae veniam dicta numquam obcaecati et tempora, temporibus sequi non quasi. Natus, recusandae. Aspernatur aut odio nesciunt sequi laudantium qui molestias recusandae. Soluta delectus doloremque ratione perspiciatis dicta excepturi.</Text>

                <Image source={testImg} style={{ height: 200, width: 200 }} />
            </ScrollView>
        </View>
    );
}
