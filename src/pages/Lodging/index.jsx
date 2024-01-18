import { useParams } from 'react-router-dom'
import '../../css/Lodging/index.scss'

function Lodging() {
	const { idLodging } = useParams()
	return <main className="Lodging">Lodging : {idLodging}</main>
}

export default Lodging
