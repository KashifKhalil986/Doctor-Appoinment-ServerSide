const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      availability,
      fees,
      address,
      date,
    } = req.body;
    const imageFile = req.file;

    console.log({
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      availability,
      fees,
      address,
      date,
      imageFile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addDoctor };
