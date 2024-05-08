import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './Header'
import AlumniCard from './AlumniCard'
import { auth, collection, firestore, getDocs } from '../../firebase'

function Alumni() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDepartment, setSelectedDepartment] = useState('Computer Science')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const currentUser = auth.currentUser
        const currentUserEmail = currentUser ? currentUser.email : null

        const querySnapshot = await getDocs(collection(firestore, 'users'))
        const data = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() })) // Map over documents
          .filter((item) => {
            // Filter documents with session more than 4 years old and not the current user
            const sessionDate = new Date(item.session)
            const currentDate = new Date()
            return sessionDate < currentDate && item.email !== currentUserEmail
          })
          .filter((user) => user.department === selectedDepartment)
        setUsers(data)
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setLoading(false) // Set loading to false after users are fetched (or if there's an error)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDepartment])

  // Filter users based on search query
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
  return (
    <>
      {/* Navbar */}
      <Header />
      {/* Main Section */}
      <section>
        <div className="p-md-4 p-2 mb-3 mb-md-5">
          <div className="row">
            <div className="col-md-8">
              <input
                type="search"
                className="form-control rounded-0 px-3 py-2"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="form-text mb-2 mb-md-0">You can search people with the skills you are interested.</div>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-4">
                <label className="input-group-text fw-semibold text-muted" htmlFor="inputGroupSelect01">
                  Department
                </label>
                <select
                  className="form-select"
                  id="inputGroupSelect01"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Social Sciences">Social Sciences</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Political Science">Political Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {loading ? ( // Render loader if loading is true
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="p-3 p-md-5 border m-2 m-md-5">
            <div className="row">
              {filteredUsers.map((user, index) => (
                <AlumniCard key={index} user={user} />
              ))}
            </div>
          </div>
        )}
      </section>
      {/* Footer */}
      <footer
        className="bg-body-secondary text-center py-3 py-md-4 fw-semibold text-info-emphasis text-shadow"
        id="copyright"
      ></footer>
    </>
  )
}

export default Alumni
