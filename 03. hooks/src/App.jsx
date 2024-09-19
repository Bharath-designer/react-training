import ItemsManager from './components/ItemsManager'
import { ItemProvider } from './context/ItemsContext.jsx'

function App() {

	return (
		<>
			<ItemProvider>
				<ItemsManager />
			</ItemProvider>
		</>
	)
}

export default App
