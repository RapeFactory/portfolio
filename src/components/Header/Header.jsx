import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header grid">
        <img src={logo} className="logo" alt="logo" />
        <h1>Portfolio Header</h1>
        <p>
          Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Грустный переписывается
          он ты несколько, вопроса жаренные вскоре речью продолжил предупреждал языкового, семь его гор вершину за
          скатился языком оксмокс? Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
          Единственное, маленький страну ручеек но вопроса ее. Коварных проектах своих ее! Они о правилами текст журчит
          коварный пор рот парадигматическая там предупреждал, дорогу переписывается напоивший которое деревни выйти
          одна даже. Продолжил свою выйти до своего вопрос раз необходимыми переписали решила но текста ipsum
          повстречался, снова речью по всей взгляд подпоясал буквоград напоивший за страна гор, даль сбить, lorem
          приставка! Скатился букв осталось это страна путь взобравшись запятых рукописи имени. Наш то использовало свой
          подпоясал текст строчка силуэт реторический, точках всемогущая предупреждал речью своего. Переписывается
          однажды запятых но ее, приставка пор все.
        </p>
      </div>
    );
  }
}

export default Header;