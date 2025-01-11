<!DOCTYPE html>
<html>
  <head>
    <title>Let Simon Decide</title>
    
  </head>
  <body>
    <%= render 'shared/header' %>

    <div id="menuorange">
      <%= image_tag 'border_mydecisions_01.gif', alt: t('topbar.my_decisions') %>
      <%= link_to t('topbar.my_decisions'), lsd_decisions_path %>
      <%= image_tag 'border_mydecisions_02.gif', alt: ".." %>
    </div>

    <div id="submenucontent">
      <%= link_to t('Breadcrumbs.home'), root_path %>
      <%= image_tag 'arrow.gif', alt: "..", size: "5x9" %>
      <%= link_to t('Breadcrumbs.my_life_profile'), lsd_lifeprofiles_path + '/show' %>
      <%= image_tag 'arrow.gif', alt: "..", size: "5x9" %>
      <a href="#"><%= t 'Breadcrumbs.my_currentsituation' %></a>
    </div>

    <div id="content_internal">
      <div id="menu_left">
        <p class="title_menuleft"><%= t 'section.where_you_are' %></p>
        <div id="note_menu">
          <ul>
            <li class="lititle"><%= link_to t('section.Life_Profile.lnk_life_profile_menu'), lsd_lifeprofiles_path, class: 'lisubtitle' %></li>
            <li><%= link_to t('section.Goals.title_your_goals'), lsd_goals_path + '/new' %></li>
            <li class="liselected"><%= link_to t('section.Situation.title_your_current_situation'), lsd_currentsituations_path + '/new' %></li>
            <li><%= link_to t('section.Personality.title_your_personality_type'), lsd_personalitytypes_path + '/new' %></li>
            <li><%= link_to t('section.Activities.title_your_favorite_activities'), lsd_favoriteactivities_path + '/new' %></li>
            <li><%= link_to t('section.Decision_Style.title_your_decision_style'), lsd_decisionstyles_path + '/new' %></li>
            <li><%= link_to t('section.Life_Profile.title_life_profile_summary'), lsd_lifeprofiles_path + '/show' %></li>
          </ul>
        </div>
        <%= image_tag 'left-menu-inf.jpg', alt: "..", size: "170x25" %>
      </div>

      <%= yield %>

      <div id="sidebar_right">
        <a href="<%= lsd_decisions_path + '/new' %>">
          <%= image_tag "#{@locale}/decision_btn_pressed.jpg", alt: t('navigation.start_new_decision'), size: "150x200", class: "hidden_item" %>
          <%= image_tag "#{@locale}/decision_btn_normal.jpg", alt: t('navigation.start_new_decision'), id: "decision_btn", size: "150x200" %>
        </a>
        <div id="fan_facebook">
          <fb:fan profile_id="109104300866" stream="" connections="" height="80" width="190" css="http://www.letsimondecide.com/stylesheets/facebook_style.css?1"></fb:fan>
          <div style="font-size:8px; padding-left:10px"></div>
          <a href="http://twitter.com/LetSimonDecide" target="_blank">
            <%= image_tag 'twitter_button.gif', alt: "simon on twitter", style: "padding-right:10px;" %>
          </a>
        </div>
      </div>
    </div>

    <%= render 'shared/footer' %>

    <div class="errorExplanation" id="alert_gemail">
      <h2><%= t 'bottombar.title_generic_email' %></h2>
      <p></p>
    </div>

    <div id="helpdialog" class="jqmNotice" style="display:none">
      <div class="jqmnTitle jqDrag">
        <h3><%= t 'Helpdialog.help' %></h3>
      </div>
      <div class="jqmnContent">
        <p><%= t 'Helpdialog.usersituation' %></p>
      </div>
      <%= image_tag 'close_icon.png', alt: "close", class: "jqmClose" %>
    </div>

    <%= render 'shared/generic_email' %>
  </body>
</html>
