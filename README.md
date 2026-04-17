MS-Myjo: Smart Curriculum Portal
The MYJO Smart Curriculum is a comprehensive digital library and educational management platform for MS Education Academy. It provides a structured interface for accessing 2026-27 academic resources across Pre-Primary and Primary levels.

🚀 Features
Categorized Curriculum: Organized by grade level (Nursery, PP1, PP2, Classes 1-5) and subject (Deeniyat, Literacy, Numeracy, EVS, etc.).

Interactive Resources: Access to 114+ digital modules including coursebooks, workbooks, and learning cards.

Tarbiyah-Based Education: Integration of value-based learning and the "Growing with Purpose" framework.

Smart Navigation: Quick-access sidebar for switching between subjects like English, Hindi, Urdu, Maths, and Social Studies.

🛠️ Local Development
Follow these steps to set up the project environment:

Prerequisites
Node.js (LTS version recommended)

A valid Gemini API Key for AI-enhanced curriculum features.

Setup Instructions
Clone the repository:

Bash
git clone https://github.com/6359-abdul/MS-Myjo.git
cd MS-Myjo
Install dependencies:

Bash
npm install
Environment Configuration:
Create a .env.local file in the root directory and add your key:

Code snippet
GEMINI_API_KEY=your_api_key_here
Run the application:

Bash
npm run dev
📖 Content Structure
The portal serves as a digital repository for:

Pre-Primary (28 Modules): Environmental awareness, rhymes, and foundational literacy.

Primary (86 Modules): Detailed subject-wise breakdown for Classes 1 through 5, aligned with NEP & NCF guidelines.

Specialized Content: Deeniyat, Urdu, and Telugu language modules.

Live Preview: Access the production environment at msmyjo.vercel.app
