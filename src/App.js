import { Component } from 'react';
import Header from './header';
import Footer from './Footer';
import Menu from './halaman/menu kontak';
import Menuproduk from './halaman/menu produk';
import MenuTK from './halaman/menuTentangKami';
import MenuU from './halaman/menuUtama';

class App extends Component {
  render(){
    return(
      <div> 
        <Header />
        <Menu />
        <Menuproduk />
        <MenuTK />
        <MenuU />
        <Footer />
      </div>
      
    );
  }
}

export default App;