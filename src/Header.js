import './App.css';


class Header extends React.Component {
    render () {
        return (
            <header>
                <ul className="li-1">
                    <h1>
                        <a href='#'>
                            Developers Cup
                        </a>
                    </h1>
                </ul>
                
                <ul className="li-2">
                    <a href=''>About</a>
                    <a href=''>Service</a>
                    <a href=''>Contect</a>
                    <a href=''>Discord</a>
                </ul>
                
                <ul className="li-3">
                    <button>Login</button>
                    <button>Sing Up</button>
                </ul>
            </header>
      );
    }
  
}




const app = document.getElementById('Header');

ReactDOM.render(<Header />, app);



// class App extends React.Component {
//     render () {
//         return (
//             <>
//                 <Header />
//             </>
//         );

//     }

// };

// export default Header;
