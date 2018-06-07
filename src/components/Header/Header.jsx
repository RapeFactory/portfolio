import React, { Component } from 'react';
import './Header.css';
import Contacts from '../Contacts';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false
    };
  }

  mouse = () => {
    this.setState({ over: !this.state.over });
  };

  render() {
    const { over } = this.state;
    return (
      <div className="header grid" onMouseLeave={this.mouse} onMouseEnter={this.mouse}>
        <h1>Portfolio Header</h1>
        <p>
          {over
            ? `Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. По всей дороге рыбного
          свой взгляд лучше? Языкового алфавит эта продолжил свое? Журчит маленькая рыбными назад возвращайся над, за
          точках единственное, подпоясал страну последний парадигматическая дорогу домах речью, переулка проектах
          приставка мир семантика. Живет напоивший но имени грустный которое составитель там это переулка заголовок
          деревни, заглавных она буквенных он продолжил собрал, свое ручеек проектах, ты ipsum. Первую последний, текста
          снова большого пустился своих текст свой подзаголовок маленький взгляд? Заглавных пор большого предложения это
          сбить семь власти? Страну использовало имеет текст текстами ipsum приставка даже до скатился, страна своих
          великий свой? Текстами бросил буквенных подпоясал точках сбить всемогущая рот ведущими лучше дал, скатился ты,
          вопроса знаках вершину.`
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut labore quod ex optio dicta modi qui
          architecto commodi, laboriosam ut sunt cum hic amet dolore veritatis alias sit natus accusamus ad sint,
          molestias error. Eos unde velit nesciunt voluptatem officia facere inventore maxime nam, tempore atque rerum.
          Exercitationem consectetur saepe qui distinctio inventore ex repellat modi impedit asperiores vel, nihil
          pariatur ratione eius dignissimos, ducimus hic dolor nostrum facilis perspiciatis animi debitis nobis delectus.
          Obcaecati ex ratione molestiae sint error vero, officiis vitae voluptatibus quidem harum distinctio omnis
          voluptate odit est molestias asperiores nostrum iure. Odio quas, reprehenderit, illo repudiandae exercitationem
          dolorem cum commodi nisi distinctio numquam officia voluptas totam vel libero repellendus! Qui temporibus
          quisquam vitae, dolores accusantium eum iure laudantium similique provident rerum est ipsa sapiente animi
          mollitia! Mollitia commodi assumenda veniam esse ducimus repellat pariatur facere magnam rerum iste! Nam
          architecto cumque voluptate! Laudantium, voluptas ad!`}
        </p>
        <Contacts />
      </div>
    );
  }
}

export default Header;
