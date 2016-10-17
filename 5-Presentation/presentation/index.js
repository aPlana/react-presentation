// Import React
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    S,
    Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import example
import ProductPreview from "../../1-ReactExample/src/ProductPreview";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/ProductPreview.css");

const images = {
    cover: require("../assets/cover.jpg"),
    logos: {
        react: require("../assets/react-logo.png"),
        flux: require("../assets/flux-logo.png"),
        redux: require("../assets/redux-logo.png")
    },
    backgrounds: {
        react: require("../assets/react-background.png"),
        flux: require("../assets/flux-background.png"),
        redux: require("../assets/redux-background.png")
    },
    wat: require("../assets/wat.png"),
    mvc: require("../assets/flux-mvc.png"),
    bug: require("../assets/facebook-bug.png"),
    flow: require("../assets/flux-flow.png")
};

preloader(images);

const theme = createTheme({
    primary: "white",
    tertiary: "black",
    quartenary: "#60DAFA"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={[]} transitionDuration={500} controls={false}>
                    <Slide transition={["spin", "zoom"]} bgImage={images.cover} bgDarken={0.30}>
                        <Heading size={2} caps fit lineHeight={1} textColor="#eee">
                            A brief introduction to
                        </Heading>
                        <Heading size={1} caps lineHeight={1} textColor="#eee">
                            React, flux and Redux
                        </Heading>
                    </Slide>
                    <Slide transition={["fade"]}>
                        <Image src={images.logos.react} width="50%"/>
                    </Slide>
                    <Slide transition={["zoom"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} caps>
                            What is it?
                        </Heading>
                            <Appear><Text margin="20px 0">Library, not framework</Text></Appear>
                            <Appear><Text margin="20px 0">Built to solve one problem: building large applications with data that changes over time.</Text></Appear>
                            <Appear>
                                <div>
                                    <Text margin="20px 0 10px" italic>"Simply express how your app should look at any given point in time, and React will automatically manage all UI updates when your underlying data changes."</Text>
                                    <Text textSize="0.9em">- Why React? (React documentation)</Text>
                                </div>
                            </Appear>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.backgrounds.react} notes="1-Reusable. 2-Predictable. 3-Does not assume stack. Reusable">
                        <Heading size={1} fit caps>
                            Characteristics
                        </Heading>
                        <List>
                            <Appear><ListItem>Component based</ListItem></Appear>
                            <Appear><ListItem>Declarative</ListItem></Appear>
                            <Appear><ListItem><S type="italic">Learn once, write everywhere</S></ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["spin", "fade"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} fit caps notes="Components are self contained, sacrificing separation of concerns. Virtual DOM reuses nodes (array-key)">
                            Characteristics (II)
                        </Heading>
                        <List>
                            <Appear><ListItem>JSX (e.g. <Code>&lt;Lol&gt;</Code> could render 😂)</ListItem></Appear>
                            <Appear><ListItem>CSS in JS (a bit controversial)</ListItem></Appear>
                            <Appear><ListItem>Virtual DOM</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["fade"]} bgImage={images.backgrounds.react} notes="1-Update state only renders once. 2,3-To access DOM. 4-To improve performance">
                        <Heading size={1} fit caps>
                            Structure of a component
                        </Heading>
                        <List>
                            <Appear><ListItem>Render</ListItem></Appear>
                            <Appear><ListItem>Props</ListItem></Appear>
                            <Appear><ListItem>State</ListItem></Appear>
                            <Appear><ListItem>
                                Lifecycle hooks
                                <List>
                                    <Appear><ListItem margin="0 30px">componentWillMount</ListItem></Appear>
                                    <Appear><ListItem margin="0 30px">componentDidMount</ListItem></Appear>
                                    <Appear><ListItem margin="0 30px">componentWillUnmount</ListItem></Appear>
                                    <Appear><ListItem margin="0 30px">shouldComponentUpdate</ListItem></Appear>
                                </List>
                            </ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["zoom"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} fit caps>
                            Example - Simple component
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/code/HelloWorld.example")}
                            margin="20px auto"
                        />
                    </Slide>
                    <Slide transition={["spin"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} fit caps>
                            Example 2 - Stateful component
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/code/Timer.example")}
                            margin="20px auto"
                        />
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} fit lineHeight={1}>
                            Yeah, really nice, but... What can all this be REALLY used for?
                        </Heading>
                        <Image src={images.wat} width="300"/>
                    </Slide>
                    <Slide transition={["zoom"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} fit caps>
                            Example 3 - ?
                        </Heading>
                        <CodePane
                            lang="jsx"
                            source={require("raw!../assets/code/WhatIsIt.example")}
                            margin="20px auto"
                        />
                    </Slide>
                    <Slide transition={["spin", "fade"]} bgImage={images.backgrounds.react} notes="Do not forget keyboard events">
                        <Heading size={1} fit caps>
                            Example 3 - Product preview
                        </Heading>
                        <ProductPreview initialIndex={0} images={[
                            require('../assets/mug-preview/mug1.jpg'),
                            require('../assets/mug-preview/mug2.jpg'),
                            require('../assets/mug-preview/mug3.jpg')
                        ]}/>
                        <Text italic textSize="0.6em">* This was intended to be an example of a possible usage of React in the company</Text>
                    </Slide>
                    <Slide transition={["fade"]} bgImage={images.backgrounds.react}>
                        <Text size={1} fit>Now go check the code. I will wait here.</Text>
                    </Slide>
                    <Slide transition={["zoom"]}>
                        <Image src={images.logos.flux} width="45%"/>
                    </Slide>
                    <Slide transition={["slide"]} bgImage={images.backgrounds.flux} notes="If chat is focused or main messages view is open, decrement unseen count">
                        <Heading size={1} caps margin="20px 0">
                            Motivation
                        </Heading>
                        <Layout>
                            <Appear>
                                <Fill>
                                    <Text>MVC not scaling well</Text>
                                    <Image src={images.mvc}/>
                                </Fill>
                            </Appear>
                            <Appear>
                                <Fill>
                                    <Text>Annoying bug</Text>
                                    <Image src={images.bug}/>
                                </Fill>
                            </Appear>
                        </Layout>
                    </Slide>
                    <Slide transition={["spin", "fade"]} bgImage={images.backgrounds.flux} notes="Action creators. Stores subscribe to actions, process them, and emit event. Controller views use the stores' public getters to get parts of the state.">
                        <Heading size={1} caps>
                            Flux data flow
                        </Heading>
                        <Image src={images.flow} width="70%" margin="40px 0 0"/>
                        <Appear>
                            <Text textAlign="left" margin="10px 0">
                                <S type="bold">Store</S> - manages the application state for a particular domain
                            </Text>
                        </Appear>
                        <Appear>
                            <Text textAlign="left" margin="10px 0">
                                <S type="bold">View</S> - typically a React component
                            </Text>
                        </Appear>
                        <Appear>
                            <Text textAlign="left" margin="10px 0">
                                <S type="bold">Action</S> - any user interaction with UI, change in the server, etc.
                            </Text>
                        </Appear>
                        <Appear>
                            <Text textAlign="left" margin="10px 0">
                                <S type="bold">Dispatcher</S> - notifies stores about actions triggered
                            </Text>
                        </Appear>
                    </Slide>
                    <Slide transition={["zoom", "slide"]} bgImage={images.backgrounds.flux} notes="e.g. List of unread and its length">
                        <Heading size={1} fit caps>
                            Characteristics
                        </Heading>
                        <List>
                            <Appear>
                                <ListItem>
                                    Explicit data, instead of derived data
                                    <List>
                                        <ListItem margin="0 30px">Client has more control and ability to stay consistent</ListItem>
                                    </List>
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    Wants to separate data from view state
                                    <List>
                                        <ListItem margin="0 30px">Not a surprise, just like MVC</ListItem>
                                    </List>
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    Avoids cascading effects by preventing nested updates
                                    <List>
                                        <Appear><ListItem margin="0 30px">Single direction of data flow</ListItem></Appear>
                                        <Appear><ListItem margin="0 30px">Finish processing before triggering new actions</ListItem></Appear>
                                     </List>
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={["zoom", "fade"]} bgImage={images.backgrounds.flux} notes="Makes easier to bring people onboard">
                        <Heading size={1} fit caps>
                            Benefits
                        </Heading>
                        <List>
                            <Appear>
                                <ListItem>
                                    <S type="italic">"If you understand where your action starts, and what are the changes inside the data layer, you know all the downstream effects"</S>- Jing Chen (Facebook)
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Improves data consistency</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Makes easier to pinpoint root of a bug</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Meaningful UT: <S type="italic">state A + input </S>➡️<S type="italic"> state B</S></ListItem>
                            </Appear>
                        </List>
                    </Slide>
                    <Slide transition={["fade", "spin"]} bgImage={images.backgrounds.flux}>
                        <Text size={1}>Time to check some code again.</Text>
                    </Slide>
                    <Slide transition={["zoom"]}>
                        <Image src={images.logos.redux} width="55%"/>
                    </Slide>
                    <Slide transition={["slide", "fade"]} bgImage={images.backgrounds.redux}>
                        <Heading size={1} caps>
                            Motivation:
                        </Heading>
                        <Appear>
                            <Heading size={2} caps>
                                Frustration
                            </Heading>
                        </Appear>
                        <Appear>
                            <Heading size={6} caps>
                                (because of the workflow)
                            </Heading>
                        </Appear>
                    </Slide>
                    <Slide transition={["spin"]} bgImage={images.backgrounds.redux}>
                        <Heading size={2} caps lineHeight={1.5}>
                            Why "Redux"?
                        </Heading>
                        <Appear><Text>Reducers + Flux</Text></Appear>
                        <Appear>
                            <Heading size={2} caps lineHeight={1.5}>
                                Reducers?
                            </Heading>
                        </Appear>
                        <Appear><Code>(previousState, action) => newState</Code></Appear>
                        <Appear><Text margin="20px 0">This signature is the same as <S type="italic">Array.reduce:</S>
                        <Code>(accumulator, value) => accumulator</Code></Text></Appear>
                    </Slide>
                    <Slide transition={["zoom", "fade"]} bgImage={images.backgrounds.redux} notes="1-Whole app state in an object tree in a single store. 2-By forcing the creation of actions, avoids race-conditions and allows debugging. 3-No mutating state">
                        <Heading size={1} fit caps>
                            The three principles of Redux
                        </Heading>
                        <List>
                            <Appear><ListItem>Single source of truth</ListItem></Appear>
                            <Appear><ListItem>State is read-only</ListItem></Appear>
                            <Appear><ListItem>Reducers must be pure functions</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["fade", "spin"]} bgImage={images.backgrounds.redux} notes="Redux relies on pure functions instead of event emitters, and pure functions are easy to compose and don’t need an additional entity managing them.">
                        <Heading size={1} fit caps>
                            Differences with Flux
                        </Heading>
                        <List>
                            <Appear><ListItem>Only one store - state tree</ListItem></Appear>
                            <Appear><ListItem>There is no Dispatcher</ListItem></Appear>
                            <Appear><ListItem>Redux, unlike Flux, assumes data is not mutated - otherwise the cool stuff does not work</ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgImage={images.backgrounds.redux}>
                        <Heading size={1} fit caps>
                            Benefits (aka <S type="italic">the cool stuff</S>)
                        </Heading>
                        <List>
                            <Appear><ListItem>Hot reloading</ListItem></Appear>
                            <Appear><ListItem>Time travel</ListItem></Appear>
                            <Appear><ListItem>
                                It makes easy to implement:
                                <List>
                                    <ListItem margin="0 30px">A logger</ListItem>
                                    <ListItem margin="0 30px">The undo functionality</ListItem>
                                    <ListItem margin="0 30px">Etc.</ListItem>
                                </List>
                            </ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["fade", "zoom"]} bgImage={images.backgrounds.redux}>
                        <Text size={1}>Code time</Text>
                        <Text size={1}>Oh, and do not forget the awesome devTools</Text>
                    </Slide>
                    <Slide transition={["slide", "spin"]} bgImage={images.backgrounds.redux}>
                        <Heading size={1}>
                            react-redux
                        </Heading>
                        <List>
                            <Appear><ListItem>Used to abstract the Redux logic in container components</ListItem></Appear>
                            <Appear><ListItem><Code>&lt;Provider&gt;</Code> provides (😑) the store to its child components</ListItem></Appear>
                            <Appear><ListItem>
                                Container components created via <Code>connect</Code>
                                <List>
                                    <Appear><ListItem margin="0 30px"><Code>mapStateToProps</Code></ListItem></Appear>
                                    <Appear><ListItem margin="0 30px"><Code>mapDispatchToProps</Code></ListItem></Appear>
                                </List>
                            </ListItem></Appear>
                        </List>
                    </Slide>
                    <Slide transition={["spin", "fade"]} bgImage={images.backgrounds.redux}>
                        <Text size={1}>We're almost finished. Go check the last piece of code.</Text>
                        <Text size={1}>It's not much, I promise.</Text>
                    </Slide>
                    <Slide transition={["zoom", "slide"]} bgImage={images.backgrounds.react}>
                        <Heading size={1} fit caps>There's much more cool stuff out there</Heading>
                        <List>
                            <ListItem>Immutable</ListItem>
                            <ListItem>GraphQL + Relay</ListItem>
                            <ListItem>React Native</ListItem>
                            <ListItem>Isomorphism</ListItem>
                            <ListItem>Flow</ListItem>
                        </List>
                    </Slide>
                    <Slide transition={["fade", "zoom"]} bgImage={images.backgrounds.react} notes="You're not gonna want to miss the next exciting episode of the [...]">
                        <Heading size={1} fit caps>That's all folks</Heading>
                        <Heading size={2} caps>Any questions?</Heading>
                        <Text margin="40% 0 0" textAlign="left" textSize="25">OK, it wasn't so brief</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
