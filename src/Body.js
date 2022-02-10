import './index.css';

class Body extends React.Component {
    render () {
        return (
            <section>
                <div>
                    <p>
                        Another Competetion Soon ...<br />
                        <br />
                        Competetion Every 3 months<br />
                        for prizes and some cool stuff<br />
                        <br />
                        To Join the Competetion Join Our Discord<br />
                    </p>
                    <h3>
                        Join Discord For Details
                    </h3>
                    <button>
                        Discord Server
                    </button>
                </div>
            </section>
        );
    }
}



const app = document.getElementById('Body');

ReactDOM.render(<Body />, app);












// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('app')
// );
