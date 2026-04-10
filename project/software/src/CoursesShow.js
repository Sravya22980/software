function CoursesShow() {
  const course = [
    {
      id: 1,
      image: "https://media.venturecapitaljournal.com/uploads/2024/10/AI-problem-solving_GettyImages-1188768294.jpg",
      title: "Artificial Intelligence"
    },
    {
      id: 2,
      image: "https://www.intellicus.com/wp-content/uploads/2020/12/data-science2.svg",
      title: "Data Science"
    },
    {
        id: 3,
        image:"https://cdn.vectorstock.com/i/500p/26/96/cyber-security-risk-management-abstract-concept-vector-38812696.jpg",
        title:"Cyber Security"
    },
    {
        id: 4,
        image: "https://static.vecteezy.com/system/resources/previews/004/655/703/non_2x/trendy-design-icon-of-machine-learning-vector.jpg",
        title: "Machine Learning"
    },
    {
        id: 5,
        image: "https://www.sostechgroup.com/wp-content/uploads/2016/08/ThinkstockPhotos-176551504.jpg",
        title: "Cloud Computing"
    },
    {
        id: 6,
        image: "https://www.cybrain.co.in/img/fullstackdeves.png",
        title: "Web Development"
    },
    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiRg8Urw3Oc6XUOf3Wa_6ERKqRsT1VcQISa60uBAI&s",
        title: "DevOps"
    },
    {
        id: 8,
        image: "https://velvetech.com/wp-content/uploads/2022/07/data-analytics-role.jpg",
        title:"Data Analytics"
    },
    {
        id: 9,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQP6rRmLGaJIi61lc9xng_ckT6m5eED9OEtQ&s",
        title: "Mobile App Development"
    },
    {
        id: 10,
        image: "https://www.siliconinfo.com/assets/img/backend-software-development-img.jpg",
        title: "Full Stack Development"
    },
    {
        id: 11,
        image: "https://teckmate.in/wp-content/uploads/2023/07/UI-UX-Design-Service.png",
        title: "UI / UX Design"
    },
    {
        id: 12,
        image: "https://t4.ftcdn.net/jpg/17/65/31/07/360_F_1765310782_1rjDUGYGsTgCOvqvNsz3s9QZVCq8JptB.jpg",
        title: "Network Engineering"
    }
  ];

  return (
    <div>
      <h2>Courses We Offer</h2>
      <div id="coursesshow" className="row">
      {course.map(c => (
        <div className="card" key={c.id}>
          {c.image && (
            <img
              src={c.image}
              className="card-img"
              alt={c.title}
            />
          )}

          <div className="card-title">
            <button>{c.title}</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default CoursesShow;
