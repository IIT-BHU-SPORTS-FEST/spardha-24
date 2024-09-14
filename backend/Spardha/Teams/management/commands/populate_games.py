from django.core.management.base import BaseCommand
from Teams.models import Game  # Import your Game model from the Teams app

class Command(BaseCommand):
    help = 'Populate games into the database'

    def handle(self, *args, **kwargs):
        games_data = [
            # Boys games
            {"name": "Athletics", "game_type": "B", "min_players": 1, "max_players": 1},
            {"name": "Badminton", "game_type": "B", "min_players": 1, "max_players": 2},
            {"name": "Basketball", "game_type": "B", "min_players": 5, "max_players": 5},
            {"name": "Boxing", "game_type": "B", "min_players": 1, "max_players": 1},
            {"name": "Kabaddi", "game_type": "B", "min_players": 7, "max_players": 7},
            {"name": "Kho-Kho", "game_type": "B", "min_players": 9, "max_players": 9},
            {"name": "Handball", "game_type": "B", "min_players": 7, "max_players": 7},
            {"name": "Lawn Tennis", "game_type": "B", "min_players": 1, "max_players": 2},
            {"name": "Squash", "game_type": "B", "min_players": 1, "max_players": 1},
            {"name": "Table Tennis", "game_type": "B", "min_players": 1, "max_players": 2},
            {"name": "Volleyball", "game_type": "B", "min_players": 6, "max_players": 6},
            {"name": "Taekwondo", "game_type": "B", "min_players": 1, "max_players": 1},
            {"name": "Cricket", "game_type": "B", "min_players": 11, "max_players": 11},
            {"name": "Football", "game_type": "B", "min_players": 11, "max_players": 11},
            {"name": "Hockey", "game_type": "B", "min_players": 11, "max_players": 11},
            {"name": "Powerlifting", "game_type": "B", "min_players": 1, "max_players": 1},
            {"name": "Weightlifting", "game_type": "B", "min_players": 1, "max_players": 1},

            # Girls games
            {"name": "Athletics", "game_type": "G", "min_players": 1, "max_players": 1},
            {"name": "Badminton", "game_type": "G", "min_players": 1, "max_players": 2},
            {"name": "Basketball", "game_type": "G", "min_players": 5, "max_players": 5},
            {"name": "Boxing", "game_type": "G", "min_players": 1, "max_players": 1},
            {"name": "Kabaddi", "game_type": "G", "min_players": 7, "max_players": 7},
            {"name": "Kho-Kho", "game_type": "G", "min_players": 9, "max_players": 9},
            {"name": "Handball", "game_type": "G", "min_players": 7, "max_players": 7},
            {"name": "Lawn Tennis", "game_type": "G", "min_players": 1, "max_players": 2},
            {"name": "Squash", "game_type": "G", "min_players": 1, "max_players": 1},
            {"name": "Table Tennis", "game_type": "G", "min_players": 1, "max_players": 2},
            {"name": "Taekwondo", "game_type": "G", "min_players": 1, "max_players": 1},
            {"name": "Volleyball", "game_type": "G", "min_players": 6, "max_players": 6},

            # Mixed games
            {"name": "Chess", "game_type": "M", "min_players": 1, "max_players": 1},
            {"name": "Cycling", "game_type": "M", "min_players": 1, "max_players": 1},
        ]

        for game_data in games_data:
            game, created = Game.objects.get_or_create(
                name=game_data["name"], game_type=game_data["game_type"],
                defaults={
                    "min_players": game_data["min_players"],
                    "max_players": game_data["max_players"]
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"Game {game.name} ({game.game_type}) created."))
            else:
                self.stdout.write(self.style.WARNING(f"Game {game.name} ({game.game_type}) already exists."))

        self.stdout.write(self.style.SUCCESS("Game population completed!"))
