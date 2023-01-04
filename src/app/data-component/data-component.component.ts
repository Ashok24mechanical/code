import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Courses: any = [
    { id: '1', img: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png', name: 'Angular', type: 'Free', price: '$0.00', Author: 'ashok', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '11', img: 'https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424', name: 'Next.JS', type: 'Free', price: '$0.00', Author: 'ashok', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '2', name: 'React', img: 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124', type: 'Free', price: '$0.00', Author: 'rection', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '3', name: 'java', img: 'https://images.idgesg.net/images/article/2019/05/java_binary_code_gears_programming_coding_development_by_bluebay2014_gettyimages-1040871468_2400x1600-100795798-large.jpg?auto=webp&quality=85,70', type: 'Premium', price: '$120.99', Author: 'javascript', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '4', name: 'javacsript', img: 'https://www.educative.io/v2api/editorpage/5330288608542720/image/6288755792019456', type: 'Premium', Author: 'ashok', price: '$129.99', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '5', name: 'python', img: 'https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/python_logo.jpg', type: 'Free', Author: 'ashok', price: '$199.99', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '6', name: 'Html', img: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg', type: 'Free', Author: 'ashok', price: '$0.00', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '7', name: 'node js', img: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png', type: 'Premium', price: '$99.99', Author: 'ashok', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '8', img: 'https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png', name: 'c#', type: 'Free', price: '$0.00', Author: 'c#', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '9', name: 'c++', img: 'https://www.educative.io/v2api/editorpage/5393602882568192/image/6038586442907648', price: '$0.00', type: 'Premium', Author: 'c++', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
    { id: '10', img: 'https://learn.microsoft.com/de-de/windows/images/net.png', name: '.net', type: 'Premium', price: '$139.98', Author: '.net', decription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolorem nulla cum iusto, iste autem accusamus ut laboriosam illum eos incidunt sit accusantium itaque ad architecto dolores maiores soluta reprehenderit!' },
  ]

  free() {
    return this.Courses.length;
  }

  freecourse() {
    return this.Courses.filter((Courses: any) => Courses.type === 'Free').length
  }
  premiumcourse() {
    return this.Courses.filter((Courses: any) => Courses.type === 'Premium').length
  }

  selected: any = 'AllCourse'

  filter(data: any) {
    this.selected = data;
    //  console.log(this.selected); 
  }

  received: any = ''

  receiveddata(itemname: any) {
    this.received = itemname
    // console.log(this.received);


  }


}
