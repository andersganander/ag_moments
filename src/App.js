import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import './api/axiosDefaults.js';
import SignUpForm from "./pages/auth/SignUpForm.js";
import SignInForm from "./pages/auth/SignInForm.js";
import PostCreateForm from "./pages/posts/PostCreateForm.js";
import PostPage from "./pages/posts/PostPage.js";
import PostsPage from "./pages/posts/PostsPage.js";
import { useCurrentUser } from "./contexts/CurrentUserContext.js";
import PostEditForm from "./pages/posts/PostEditForm.js";
import ProfilePage from "./pages/profiles/ProfilePage";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
      <Routes>
        <Route path="/" element={<PostsPage message="No results found."/>} />

        <Route path="/feed" 
          element={<PostsPage 
            message="No results found." 
            filter={`owner__followed__owner__profile=${profile_id}&`}
          />} 
        />

        <Route path="/liked" 
          element={<PostsPage 
            message="No results found." 
            filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
          />} 
        />

        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm /> } />
        <Route path="/posts/create" element={<PostCreateForm /> } />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/:id/edit" element={<PostEditForm />} />
        <Route path="/profiles/:id" element={<ProfilePage />} />
        <Route path="*" element={<p>Page not found!</p>} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;