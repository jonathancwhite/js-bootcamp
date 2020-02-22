// Global 
  // Local
    // Local
  // Local

// let name = 'Jonathan'

if (true) {
    // let name = 'Christian'

    if (true) {
        name = 'Lloyd' // Leaked global declaration
        console.log(name)
    }
}

if (true) {
    console.log(name)
}