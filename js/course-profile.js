document.addEventListener('DOMContentLoaded', () => {
    const icons = {
        users: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
        clock: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        medal: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15l-2 5L2 14l5-2 5 3z"></path><path d="M12 15l2 5 10-6-5-2-5 3z"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
        check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        video: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
    };

    const courseData = {
        'analytics': {
            title: 'Sports Analytics & AI',
            breadcrumb: 'Sports Analytics & AI',
            tagline: 'Master data, AI, and analytics for modern sports careers. Learn from industry experts and build real-world projects.',
            image: 'assets/courses1.png',
            highlights: ['Comprehensive Curriculum', 'Expert Instructors', 'Hands-on Projects', 'Career-Ready Skills'],
            learningObjectives: [
                'Professional commentary techniques',
                'Live broadcast production skills',
                'Video editing and post-production',
                'Social media content creation',
                'Podcast and streaming strategies',
                'Building your media portfolio'
            ],
            stats: [
                { label: 'Total Enrolled', value: '3,421', icon: 'users' },
                { label: 'Full-Time', value: '12 weeks', icon: 'clock' },
                { label: 'Upon Completion', value: 'Certificate', icon: 'medal' }
            ],
            curriculum: [
                { id: '01', title: 'Value of Analytics & AI in Sports', desc: 'Introduction to the sports analytics landscape, understanding how data drives decisions in modern sports organizations.' },
                { id: '02', title: 'Data-to-Insights Workflow', desc: 'Learn the complete process of transforming raw sports data into actionable insights and strategic recommendations.' },
                { id: '03', title: 'Machine Learning Fundamentals', desc: 'Core ML concepts applied to sports: supervised learning, classification, regression, and model evaluation.' },
                { id: '04', title: 'Sports Tracking & Technology', desc: 'Modern tracking systems, wearable technology, computer vision, and real-time data collection methods.' },
                { id: '05', title: 'SQL for Sports Data', desc: 'Database querying, data extraction, and manipulation using SQL with real sports datasets.' },
                { id: '06', title: 'Python for Modeling', desc: 'Building predictive models, player evaluation systems, and performance analytics using Python.' },
                { id: '07', title: 'R & Visualization', desc: 'Advanced statistical analysis and creating compelling data visualizations with R and modern tools.' },
                { id: '08', title: 'GenAI & Operational AI', desc: 'Cutting-edge AI applications, automation, and building AI-powered sports analytics solutions.' }
            ],
            instructor: {
                name: 'James Rodriguez',
                title: 'Senior Analytics Director',
                initials: 'JR',
                bio: 'With over 15 years leading analytics departments for championship-winning teams, James Rodriguez brings real-world expertise and industry connections to every lesson.',
                stats: [
                    { label: 'Years Experience', value: '10+' },
                    { label: 'Students', value: '25K+' },
                    { label: 'Courses', value: '3+' }
                ]
            },
            features: [
                'Beginner to Advanced',
                '5 modules with real-life projects',
                '15 downloadable resources',
                'Certificate upon completion',
                'English',
                'Live Weekly Sessions',
                'No prior coding experience required'
            ],
            price: '₦750,000',
            oldPrice: '₦1,050,000',
            savings: '₦300,000',
            includes: [
                '60+ hours on-demand video',
                '15 downloadable resources',
                'Certificate of completion',
                'Lifetime alumni access'
            ]
        },
        'broadcasting': {
            title: 'Sports Broadcasting & Media',
            breadcrumb: 'Sports Broadcasting & Media',
            tagline: 'Master the art of storytelling and live production. Learn from industry legends and build your on-air portfolio.',
            image: 'assets/courses2.png',
            highlights: ['Live Production', 'On-Air Talent', 'Media Strategy', 'Industry Mentorship'],
            learningObjectives: [
                'Advanced play-by-play commentary',
                'Broadcast camera operation',
                'Digital storytelling & editing',
                'Live streaming production',
                'Sports journalism ethics',
                'Media brand management'
            ],
            stats: [
                { label: 'Total Enrolled', value: '2,850', icon: 'users' },
                { label: 'Full-Time', value: '8 weeks', icon: 'clock' },
                { label: 'Upon Completion', value: 'Certificate', icon: 'medal' }
            ],
            curriculum: [
                { id: '01', title: 'Introduction to Sports Media', desc: 'Evolution of sports broadcasting and the modern media landscape.' },
                { id: '02', title: 'Commentary & Voice Training', desc: 'Developing your voice, pace, and storytelling ability for live events.' },
                { id: '03', title: 'Live Production & Technicals', desc: 'Mastering the control room, camera angles, and live switching.' },
                { id: '04', title: 'Digital Content Distribution', desc: 'Streaming platforms, social media clips, and multi-platform strategy.' }
            ],
            instructor: {
                name: 'Sarah Jenkins',
                title: 'Lead Broadcast Journalist',
                initials: 'SJ',
                bio: 'Award-winning journalist with a decade of experience in live sports coverage for international networks.',
                stats: [
                    { label: 'Years Experience', value: '12+' },
                    { label: 'Students', value: '18K+' },
                    { label: 'Courses', value: '4+' }
                ]
            },
            features: [
                'Beginner friendly',
                'Professional studio access',
                'Expert led masterclasses',
                'Certificate upon completion',
                'Available in English',
                'Bi-weekly production labs'
            ],
            price: '₦650,000',
            oldPrice: '₦850,000',
            savings: '₦200,000',
            includes: [
                '40+ hours on-demand video',
                '10 production templates',
                'Certificate of completion',
                'Access to studio network'
            ]
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id') || 'analytics';
    const data = courseData[courseId] || courseData['analytics'];

    const updateElement = (id, content, attr) => {
        const el = document.getElementById(id);
        if (el) {
            if (attr) el.setAttribute(attr, content);
            else el.textContent = content;
        }
    };

    updateElement('breadcrumb-title', data.breadcrumb);
    updateElement('course-title', data.title);
    updateElement('course-tagline', data.tagline);
    updateElement('course-image', data.image, 'src');
    updateElement('course-image', data.title, 'alt');
    updateElement('current-price', data.price);
    updateElement('old-price', data.oldPrice);
    updateElement('savings-badge', `Save ${data.savings}`);
    
    document.title = `${data.title} - AYBSEF`;

    // Update Highlights
    const highlightsContainer = document.getElementById('header-highlights');
    if (highlightsContainer) {
        highlightsContainer.innerHTML = data.highlights.map(h => `
            <div class="highlight-item">
                <span class="icon-circle">${icons.check}</span>
                <span>${h}</span>
            </div>
        `).join('');
    }

    // Update Learning Objectives
    const objectivesContainer = document.getElementById('learning-objectives');
    if (objectivesContainer) {
        objectivesContainer.innerHTML = data.learningObjectives.map(obj => `
            <div class="objective-item">
                <span class="check">${icons.check}</span>
                <span>${obj}</span>
            </div>
        `).join('');
    }

    // Update Stats
    const statsContainer = document.getElementById('stats-row');
    if (statsContainer) {
        statsContainer.innerHTML = data.stats.map(s => `
            <div class="stat-card">
                <span class="stat-icon icon-${s.icon}">${icons[s.icon]}</span>
                <div class="stat-info">
                    <span class="stat-value">${s.value}</span>
                    <span class="stat-label">${s.label}</span>
                </div>
            </div>
        `).join('');
    }

    // Update Curriculum
    const curriculumContainer = document.getElementById('curriculum-list');
    if (curriculumContainer) {
        curriculumContainer.innerHTML = data.curriculum.map(item => `
            <div class="curriculum-card">
                <div class="curriculum-number">${item.id}</div>
                <div class="curriculum-text">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Update Instructor
    const instructorContainer = document.getElementById('instructor-profile');
    if (instructorContainer && data.instructor) {
        instructorContainer.innerHTML = `
            <div class="instructor-card">
                <div class="instructor-header">
                    <div class="instructor-initials">${data.instructor.initials}</div>
                    <div class="instructor-info">
                        <h3>${data.instructor.name}</h3>
                        <span class="instructor-title">${data.instructor.title}</span>
                        <p class="instructor-bio">${data.instructor.bio}</p>
                    </div>
                </div>
                <div class="instructor-stats">
                    ${data.instructor.stats.map(s => `
                        <div class="inst-stat-item">
                            <span class="inst-stat-value">${s.value}</span>
                            <span class="inst-stat-label">${s.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Update Features
    const featuresContainer = document.getElementById('features-list');
    if (featuresContainer) {
        featuresContainer.innerHTML = data.features.map(f => `
            <li class="feature-item">
                <span class="dot">${icons.check}</span>
                ${f}
            </li>
        `).join('');
    }

    // Update Includes
    const includesContainer = document.getElementById('includes-list');
    if (includesContainer) {
        includesContainer.innerHTML = data.includes.map(inc => `
            <li class="include-item">
                <span class="inc-icon">${icons.video}</span>
                ${inc}
            </li>
        `).join('');
    }

    // Tabs logic
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});
