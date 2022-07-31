import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <div className="App">
        <Container>
          <MainHeader title='Budget'/>
          <Statistic size='small'>
            <Statistic.Label>Your Balance</Statistic.Label>
            <Statistic.Value>2,550.53</Statistic.Value>
          </Statistic>

          <DisplayBalances />

          <MainHeader title = 'History' type='h3'/>
          
          <EntryLine description='Something' value ='10' isExpense/>
          <EntryLine description='Something Else' value ='100'/>
          <EntryLine description='Something' value ='20' isExpense/>

          <MainHeader title = 'Add New Trasaction' type='h3' />
          <NewEntryForm />

        </Container>
    </div>
  );
}

export default App;
