# Prettiest Girl in the World Quiz 💕

A sweet, interactive game where your girlfriend discovers she's the prettiest person on earth!

## Features ✨

- Beautiful, bright, animated design with pinks, purples, blues, and yellows
- Celebrity photos "dodge" the cursor - they can't be clicked!
- 7 rounds with different celebrities
- Rotating photos of your girlfriend
- Confetti and celebration when she wins
- Fully responsive and optimized for desktop

## How It Works

1. Click "PLAY NOW" on the home screen
2. Two photos appear: your girlfriend vs a celebrity
3. The question: "Who is Prettier?"
4. When she tries to click the celebrity photo, it smoothly slides away from her cursor
5. She can only click her own photo
6. Each time she clicks herself, a new celebrity appears
7. After 7 rounds, she wins with confetti and a sweet message!

## Setup Instructions

### Step 1: Extract and Navigate

Extract this folder to your computer. Open Terminal/Command Prompt and navigate to the folder:

```bash
cd path/to/prettiest-girl-game
```

### Step 2: Install Dependencies

```bash
npm install
```

This will take a few minutes.

### Step 3: Add Photos

You need to add photos of your girlfriend and the celebrities.

**For Girlfriend Photos:**
1. Create a folder: `public/images/girlfriend/`
2. Add 7 photos named: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. Update `src/data/photos.js` with the correct paths

**For Celebrity Photos:**
1. Create a folder: `public/images/celebrities/`
2. Add celebrity photos (you can find these online)
3. Name them: `sydney-sweeney.jpg`, `megan-moroney.jpg`, `megan-fox.jpg`, `margot-robbie.jpg`, `alix-earle.jpg`, `scarlett-johansson.jpg`, `taylor-swift.jpg`
4. Update `src/data/photos.js` with the correct paths

**Example of updated photos.js:**

```javascript
export const celebrities = [
  {
    id: 1,
    name: "Sydney Sweeney",
    image: "/images/celebrities/sydney-sweeney.jpg"
  },
  // ... etc
];

export const girlfriendPhotos = [
  "/images/girlfriend/photo1.jpg",
  "/images/girlfriend/photo2.jpg",
  // ... etc
];
```

### Step 4: Test Locally

```bash
npm start
```

The game will open at `http://localhost:3000`

Test it out and make sure:
- All photos load correctly
- The dodging mechanic works
- Everything looks good!

### Step 5: Deploy to Vercel

1. Create a GitHub repository and push this code
2. Go to vercel.com and sign in
3. Import your repository
4. Deploy!

You'll get a link like `prettiest-girl-game.vercel.app` that you can share with your girlfriend.

## Customization

### Change the Final Message

Edit `src/pages/Game.jsx`, find the winner screen section, and change the text.

### Adjust Dodging Sensitivity

In `src/components/PhotoCard.jsx`, change the number `180` on line 29 to make it more or less sensitive.

### Change Colors

The color scheme uses Tailwind CSS classes. You can change:
- `from-pink-300 via-purple-300 to-blue-300` - background gradients
- `from-pink-500 to-purple-500` - button gradients
- Any color class to customize the look

## Troubleshooting

**Photos not loading?**
- Make sure the file paths in `photos.js` match your actual file names
- Check that photos are in the `public` folder
- File names are case-sensitive!

**Dodging not working?**
- Make sure you're testing on a desktop with a mouse
- Try adjusting the sensitivity value

**Build errors?**
- Run `npm install` again
- Delete `node_modules` folder and `package-lock.json`, then run `npm install`

## Have fun! 💖

This is a sweet, playful way to show your girlfriend how special she is. Enjoy!
