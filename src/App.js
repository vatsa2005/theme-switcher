import "./App.css";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <div className="App__theme">
        <ThemeSwitcher size={50} wantAnimatedIcon={true} />
        {/* initial must be either dark or white */}
      </div>
      <div className="App__para">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a augue
          scelerisque, facilisis mi eu, tempus ligula. Aliquam accumsan arcu
          rutrum nunc porta, sed tincidunt tortor pulvinar. Aenean ultricies
          nibh id mauris iaculis, at pretium justo tincidunt. Aliquam feugiat
          purus ac risus placerat venenatis. Sed quis dolor orci. Suspendisse
          blandit vehicula turpis dignissim volutpat. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Cras ac placerat est.
          Phasellus finibus orci nec commodo interdum. Integer faucibus dictum
          fermentum. Nam vehicula elit sed ex euismod, imperdiet ornare justo
          dignissim. Ut consectetur, diam et ornare tempor, orci nisl luctus
          ligula, a fringilla elit libero sit amet velit. Maecenas blandit
          convallis urna vel tristique. Vivamus molestie sit amet sapien eu
          dignissim. In euismod orci non risus fermentum, a iaculis mi
          ultricies. Sed lacinia convallis consectetur. Nunc feugiat eros non
          vestibulum sodales. Nullam fermentum tincidunt placerat. Integer
          condimentum ultrices mauris, porttitor aliquet tellus elementum a.
          Nulla quis velit sit amet felis porta dapibus. Proin quis interdum
          neque, vel condimentum elit. Vivamus vehicula egestas egestas.
          Pellentesque suscipit ipsum a pharetra molestie. Sed ullamcorper
          dictum malesuada. Vestibulum id arcu nulla. Praesent ornare, eros ut
          feugiat tincidunt, odio sem pretium dolor, nec posuere ante dolor sit
          amet enim. Etiam tempor in enim nec venenatis. Pellentesque volutpat
          nisi vitae eleifend varius. In placerat erat vel nisl euismod, at
          posuere neque consectetur. Phasellus eu nunc pellentesque, varius erat
          viverra, auctor odio. Aliquam a diam et ex gravida imperdiet eget
          vitae ipsum. Vivamus at convallis justo. Nam sem diam, convallis sit
          amet nibh id, feugiat varius quam. In hac habitasse platea dictumst.
          Vestibulum dictum velit in libero ullamcorper, in fermentum urna
          pretium. Nulla quis venenatis nisl. Sed ut ullamcorper purus. Aenean
          ullamcorper consequat rutrum. Fusce semper pharetra sodales. Cras
          laoreet, odio ut tristique iaculis, dolor mi suscipit purus, et
          bibendum enim justo sit amet nisi. In accumsan ultrices suscipit.
          Proin eget malesuada tellus, non ultrices lectus. Sed aliquet, diam at
          pellentesque vehicula, mi magna tristique ipsum, ut convallis lacus
          purus eleifend nisl. Nullam ut risus dolor. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Vivamus nec elit placerat,
          tempor est id, posuere sem. Pellentesque suscipit orci non purus
          aliquet blandit. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Donec fermentum magna nisl,
          vel ultrices leo ullamcorper eget. Fusce dignissim sem nec varius
          rhoncus. Vestibulum suscipit, enim non ornare convallis, risus massa
          pellentesque turpis, at maximus massa erat quis neque. Donec rutrum
          metus quis ipsum placerat pellentesque. Nulla eget ligula accumsan,
          vehicula arcu ac, ullamcorper turpis. Suspendisse iaculis, odio eu
          interdum facilisis, elit purus porta orci, nec ornare eros quam sit
          amet elit. Nam vitae magna ac purus fringilla faucibus at vitae nunc.
          Quisque venenatis aliquam nibh a rhoncus. Etiam faucibus nunc
          porttitor tincidunt congue. Duis porttitor semper nulla in
          pellentesque. In a molestie risus. Praesent rhoncus risus dolor, eget
          euismod arcu porttitor nec. Sed accumsan venenatis commodo. Aliquam
          convallis ullamcorper dolor vitae accumsan. Nulla pretium dolor in
          tellus bibendum, id cursus erat aliquam. Morbi vulputate eleifend
          augue, et eleifend risus sollicitudin eu. Donec at mi vitae erat
          feugiat lacinia. Sed nunc justo, imperdiet sit amet mi a, iaculis
          gravida lorem. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam finibus tincidunt dolor,
          a imperdiet leo egestas nec. Integer pulvinar erat diam, ut varius
          tellus viverra sed. Integer molestie diam sed leo fringilla ultricies.
          Praesent condimentum felis sit amet leo aliquam, luctus pellentesque
          justo dictum. Morbi et est eget lorem molestie consectetur ut vitae
          odio. Vivamus congue ligula ac sem aliquet, ac bibendum ligula
          porttitor. Pellentesque sodales eleifend arcu, lobortis condimentum
          dui vestibulum id. Praesent at convallis ligula. Pellentesque
          sollicitudin fermentum ipsum, id malesuada ex fringilla et. Vestibulum
          pulvinar euismod elit nec ornare. Vestibulum tempor metus et velit
          fringilla, vel blandit nulla egestas. Vestibulum vestibulum ipsum ut
          nunc facilisis malesuada. Suspendisse potenti. Nunc libero mi, commodo
          vitae hendrerit hendrerit, congue eu ipsum.
        </p>
      </div>
    </div>
  );
}

export default App;
