var project_template = _.template(
            "<a href='#/<%= css %>' class='project_link' id='<%= css %>'>" +
              "<li>" +
                // "<img class='preview' src='<%= image %>' alt='<%= name %>' title='<%= name %>' />" +
                "<div class='details'>" +
                  "<h4><%= name %></h4>" +
                    // "<span class='date'><%= date %></span>" +
                  "</div>" +
                  "<div class='roles'>" +
                    "<%= _.reduce(roles, '', function (memo, role) {return memo + '<span class=\"' + role[0] + '\">' + role[1] + '</span>'}) %>" +
                  "</div>" +                  
                "<br class='clear'/>" +
                "</li>" +
              "</a>")
                
var project_details_template = _.template(
                "<h2><a href='<%= url %>'><%= name %></a></h2>" +  
                "<img class='preview' src='<%= image %>' alt='<%= name %>' title='<%= name %>' />" +
                "<span class='date'><%= date %></span>" +
                "<div class='description'><%= description %></div>" +
                "<div class='roles'>" +
                  "<%= _.reduce(roles, '', function (memo, role) {return memo + '<span class=\"' + role[0] + '\">' + role[1] + '</span>'}) %>" +
                "</div>" +                  
                "<br class='clear'/>"
                )