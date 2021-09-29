| Project | Author | Date | Description |
|---|---|---|---|
| Contact Card | Michael Chinn | 9/28/2021 | The result should mirror the wireframe as closely as possible. The only important part of the wireframe is what is between the top notification bar and bottom button bar |

## Wireframe
Wireframe template | [Link](https://xd.adobe.com/view/aa55aac8-7bdf-47cd-ad56-cdc2411be237-ff06/?fullscreen)

### Wireframe breakdown
- Main | Element - Background Image
    - Personal Image
    - Card Header
        - Name
    - Card Body
        - Row 1
            - Mail Icon
            - Phone Icon
            - Website Icon
        - Row 2
            - Instagram Icon
            - Twitter Icon
            - GitHub Icon

## Bootstrap Starter Boilerplate

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bootstrap Site</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
    </head>
    <body>
        <main class="container-fluid bg-img"> <!-- wireframe container -->
            <div class="row">
                <div class="col">
                    <!-- Image -->
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <!-- card goes here -->
                        <!-- Name -->
                        <!-- Row 1 -->
                            <!--  Mail Icon  -->
                            <!--  Phone Icon  -->
                            <!--  Website Icon  -->
                        <!-- Row 2 -->
                            <!--  Instagram Icon  -->
                            <!--  Twitter Icon  -->
                            <!--  GitHub Icon  -->
                </div>
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
    </body>
</html>
```

## Bootstrap Card
```
<div class="card container-fluid">
    <div class="card-header row">
        <h1>Michael Chinn</h1>
    </div>
    <div class="card-body row">
        <div class="col"><a href="#"><i class="fa-solid fa-envelope"></i></a></div>
        <div class="col"><a href="#"><i class="fa-solid fa-phone"></i>></a></div>
        <div class="col"><a href="#"><i class="fa-solid fa-globe"></i>></a></div>
    </div>
    <div class="card-body row">
        <div class="col"><a href="#"><i class="fa-brands fa-instagram"></i>></a></div>
        <div class="col"><a href="#"><i class="fa-brands fa-twitter"></i>></a></div>
        <div class="col"><a href="#"><i class="fa-brands fa-github-alt"></i>></a></div>
    </div>
</div>
```