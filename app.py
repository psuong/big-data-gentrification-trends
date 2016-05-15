from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def home():
    context_dict = {
        'neighborhoods': create_neighborhood_list(),
        'page_title': 'Data'
    }
    return render_template('neighborhoods.html', **context_dict)


def create_neighborhood_list():
    """
    Reads the textfile for all neighborhoods currently logged and appends it
    to a list.
    :return: list
    """
    neighborhood_list = []
    with open('neighborhoods.txt', 'r') as neighborhoods:
        for neighborhood in neighborhoods:
            neighborhood_list.append(neighborhood)
    return neighborhood_list


if __name__ == '__main__':
    app.run(port=5000, debug=True)
