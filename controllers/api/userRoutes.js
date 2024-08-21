router.post('/login', async (req, res) => {
    // Validate login and create session logic here...
  });
  
  router.get('/check-session', (req, res) => {
    if (req.session.logged_in) {
      res.status(200).json({ loggedIn: true });
    } else {
      res.status(401).json({ loggedIn: false });
    }
  });
  