import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projects } from '../../DB/projects'
import ReactDOM from 'react-dom';

import './Project.scss'
const Project = () => {
    const { projectSlug } = useParams()
    const navigate = useNavigate()

    const [projectIdx, setProjectIdx] = useState(0)

    useLayoutEffect(() => {
        try{
            setProjectIdx(projects.indexOf(projects.find(project => project.name.toLowerCase().replaceAll(' ', '-') === projectSlug)))
        }catch{
            navigate('/404')
        }
    }, [projectSlug])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [projectSlug])
    return (
        <div className='project-page'>
            <div className="cover">
                <div 
                    className='img' 
                    style={{
                        backgroundImage: `url(${projects[projectIdx].cover})`
                    }}
                >
                    <div className="overlay"></div>
                    {/* <img src={projects[projectIdx].cover} alt="" /> */}
                </div>
                
                <div className="title">
                    {projects[projectIdx].name}
                </div>
            </div>
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt at ipsum, similique aliquid itaque quia labore necessitatibus consequatur quidem quos autem possimus, voluptatibus exercitationem eveniet minus quas non esse debitis maxime? Molestias, maiores at. Totam laboriosam beatae, ipsum doloremque quia, omnis nisi enim asperiores quisquam quibusdam iusto obcaecati provident delectus doloribus impedit sapiente eos veniam soluta. Quibusdam voluptas, deserunt a in animi quisquam vitae enim distinctio perspiciatis quas, natus veniam adipisci fuga praesentium? Ab, eum. Voluptates facilis voluptas velit laboriosam quis tenetur quia, illum, enim numquam deleniti officia magni rerum eius illo nisi nobis voluptate dolore dignissimos harum mollitia obcaecati ipsum. Quibusdam excepturi quaerat fuga ipsa veritatis. Accusantium similique iusto harum voluptate odit impedit ex, mollitia ducimus aliquam assumenda, aut fuga nisi consectetur veniam labore? Earum iste, exercitationem et sit reiciendis ut hic aperiam culpa, natus error fuga laborum nam. Non, nostrum iste? Quidem laboriosam quae vero minus qui cumque, natus dolorem illo non eos quaerat similique sapiente veniam dolorum hic voluptas itaque, quos eaque rerum totam in facilis! Aperiam cum, consequuntur ratione numquam rem cupiditate officiis saepe quis temporibus nostrum perferendis provident dolorum officia omnis amet odit sapiente et fuga ab ex? Ullam sequi molestiae eius repellat odio quo corrupti tempore doloribus accusamus. Laudantium officiis asperiores impedit laborum maiores repudiandae repellat quos tempora architecto nobis nemo sequi non, delectus autem cupiditate. At non tenetur aut quasi voluptate consequatur veritatis, repellat impedit ut perspiciatis enim inventore incidunt cumque. Maiores illo culpa ut qui molestias quo modi recusandae aspernatur ullam dolor magnam error laboriosam, numquam id obcaecati ipsam tenetur eos, pariatur voluptatem rerum vitae? Labore asperiores animi iusto cupiditate velit eveniet esse nesciunt ratione sunt reiciendis possimus ipsum libero magnam molestiae sequi ad est nobis aliquam, veritatis obcaecati error cumque laborum. Aliquam sapiente harum rem, laborum corporis impedit iure odio qui. Molestias laborum provident, facilis earum quo repellendus voluptatibus, perspiciatis optio alias id cumque nisi ipsum quis animi. Quia laudantium atque earum. Reprehenderit maiores dolore error expedita sunt, quia dignissimos officia voluptatibus maxime ut eaque ex a ullam, laboriosam nemo qui! Fugiat maxime quo facere aspernatur repellat dolores, assumenda tempore debitis provident, sapiente quisquam eum illum consectetur quis natus rem cupiditate at, consequatur saepe quibusdam quos neque nesciunt quae! Illo perspiciatis aut ipsum velit officia commodi repudiandae ullam tenetur! Quibusdam ducimus soluta eum, perspiciatis distinctio deleniti sequi culpa, voluptas a in, nemo quasi dignissimos aliquid cumque quod? Possimus qui veritatis laboriosam fugiat eligendi dicta sunt totam ratione sequi! Nobis culpa, quam perferendis ullam laboriosam id assumenda sed. Quasi recusandae nesciunt repellendus consectetur non! Libero molestiae placeat perferendis cupiditate soluta odio asperiores corrupti mollitia hic earum, totam ipsum nisi tempore. Repellat fugit atque dolor similique doloribus ut rerum deleniti reprehenderit. Qui iusto accusamus odio esse tempore voluptatum! Illo rerum voluptates, suscipit repellat voluptatibus asperiores amet quis maxime sint provident doloribus, natus ipsam recusandae odit ex eius beatae molestias ratione eligendi reprehenderit magnam itaque. Ducimus, doloremque beatae. Dolore nisi rem quos odit libero vitae, temporibus perspiciatis ullam dolorem porro adipisci quidem, corrupti eius asperiores soluta laudantium eaque minima ratione minus! Itaque blanditiis et natus accusamus quos hic impedit assumenda esse, ullam rerum minima pariatur cum placeat nam dignissimos deserunt magni doloremque inventore vel sapiente illum quas aut sit? Est sapiente, cupiditate optio vel repellendus sit. Non aperiam aut, reprehenderit velit suscipit in minus corrupti fugiat eos? Numquam quod magnam consequatur delectus sequi quae laborum sit doloremque et optio vitae animi molestias asperiores ea dolore dolores, id provident voluptatibus quis eligendi aperiam deserunt ducimus? Odio voluptas iusto minima sed dolor doloribus quia aut! Voluptatem adipisci voluptate nam, incidunt ad saepe, eveniet in corrupti distinctio maxime, nostrum sit? Dicta quo placeat eligendi quos expedita dignissimos sunt aperiam. Facere tempore officiis, temporibus omnis similique dolores eum optio iste deleniti repellendus voluptas esse magnam quas accusantium amet vero, modi rerum fugit dicta, illum consequatur quis placeat repudiandae corporis? Aperiam rem earum, fugiat sint neque deleniti suscipit minus, repellat accusantium nesciunt aliquid voluptatibus? Magni minus iste quas fugiat suscipit nesciunt eveniet illum et placeat dolore, sequi sit molestias modi, asperiores vero nostrum, nisi dolor corrupti laboriosam vel facere pariatur atque. Eius fugiat voluptatem aliquam distinctio deleniti, blanditiis architecto magnam ipsum numquam minus, at necessitatibus! Molestiae odio nobis qui ipsa iusto molestias est? Voluptatem ipsam voluptate porro pariatur labore, qui voluptates adipisci magnam, sapiente tenetur sunt impedit esse laboriosam incidunt! Voluptates hic ullam nihil assumenda! Incidunt, ipsa neque beatae aperiam nisi atque? A, eum? Eius, repudiandae harum libero quidem eveniet facilis. Incidunt neque modi cum doloremque enim sapiente, officia commodi corporis voluptatibus hic nobis veritatis labore consequuntur rem beatae. Esse a tenetur beatae, deserunt cupiditate eligendi autem, facere fuga fugit atque explicabo ipsam doloremque sed ducimus odit adipisci nulla in sunt nisi laudantium molestias, tempore eius quae. Numquam nostrum magnam aspernatur at asperiores doloremque ducimus veniam placeat unde consectetur blanditiis ab assumenda reprehenderit, laudantium deleniti quasi necessitatibus sapiente odio, rerum cupiditate omnis vero! Quasi voluptate autem asperiores molestias molestiae, sapiente laboriosam delectus distinctio porro vero maiores id quisquam repudiandae maxime expedita consequuntur explicabo nostrum ratione dolorem. Vero ducimus perspiciatis repellendus beatae, ex amet unde cumque! Repellendus corrupti natus cumque sint odio eligendi cum ullam, ex reprehenderit? Ad magnam est illo, ducimus alias perspiciatis quia optio quis animi modi, excepturi veritatis sequi placeat atque quasi voluptatem commodi obcaecati? Reprehenderit officiis nemo dolorum totam beatae eum nisi nesciunt inventore ratione. Praesentium veritatis blanditiis eum placeat totam, perspiciatis ratione iure earum possimus a nesciunt quo itaque explicabo. Ad, itaque recusandae sint culpa tenetur eveniet hic repellat porro fugiat quam neque consequatur fugit voluptatem in earum temporibus omnis, cupiditate eum deserunt accusamus quisquam maxime vero sequi cumque? Unde veritatis tenetur nobis repellendus reiciendis vero dolorum, nostrum possimus corporis quae in voluptas eligendi, quasi deleniti excepturi quibusdam soluta consectetur non. Ipsam tempore nulla ea repellendus error iure magni! Id consequuntur omnis delectus perferendis voluptatem cupiditate provident, similique dicta molestias sunt voluptatum blanditiis aperiam, doloremque soluta enim a hic pariatur eaque aut error vero totam nesciunt. Facere sit sint quasi vel cupiditate provident autem vitae?
            </div>
        </div>
    )
}

export default Project