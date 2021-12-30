import Nav from './nav';

function Layout(props) {

    return(
        <div>
            <header><Nav/></header>
            <main>
                {props.children}
            </main>
            
           

            
        </div>

    );
    
}

export default Layout;