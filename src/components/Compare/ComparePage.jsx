import { useCompare } from '../../utils/CompareContext'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './ComparePage.css'


const ComparePage = () => {
  const { compareList } = useCompare()
  const history = useHistory()

  // Redirect if empty
  useEffect(() => {
    if (compareList.length === 0) {
      history.push('/properties')
    }
  }, [compareList, history])

  return (
    <div className="compare-page">
      <h2>Compare Properties</h2>
      <div className="compare-grid">
        {compareList.map((item) => (
          <div key={item.id} className="compare-card">
            <img src={item.cover} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₦{item.price}</p>
            <p>Type: {item.type}</p>
            <p>Bedrooms: {item.bedrooms}</p>
            <p>Bathrooms: {item.bathrooms}</p>
            {/* Add more fields if needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComparePage
