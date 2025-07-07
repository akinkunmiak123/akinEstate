// components/CompareBar.jsx
import { useCompare } from '../../utils/CompareContext'
import { useHistory } from 'react-router-dom'

const CompareBar = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare()
  const history = useHistory()

  if (compareList.length === 0) return null

  return (
    <div className="compare-bar">
      <span>Compare {compareList.length}</span>
      <button
        onClick={() => {
          history.push('/compare')
        }}
      >
        SHOW
      </button>
      <button onClick={clearCompare}>CLEAR</button>

      <div className="compare-items">
        {compareList.map((item) => (
          <div key={item.id} className="compare-item">
            <img src={item.cover} alt={item.name} />
            <button onClick={() => removeFromCompare(item.id)}>×</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompareBar
